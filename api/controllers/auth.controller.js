import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  console.log("body", req.body);
  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: encryptedPassword,
      },
    });

    res.status(201).json({ message: `user ${user.username} created` });
  } catch (error) {
    res
      .status(500)
      .json({ message: `${error.message} -- Failed to create user` });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const maxAge = 3 * 24 * 60 * 60 * 1000;

    const jwtToken = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        email: user.email,
      },
      process.env.JWT_KEY,
      { expiresIn: maxAge }
    );

    res
      .cookie("token", jwtToken, {
        httpOnly: true,
        maxAge,
      })
      .status(200)
      .json({ message: "Login successful" });
  } catch (error) {
    res
      .status(500)
      .json({ message: `${error.message} -- Failed to login user` });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout successful" });
};
