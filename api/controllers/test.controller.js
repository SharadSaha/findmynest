import jwt from "jsonwebtoken";

export const validateLoggedInUser = async (req, res) => {
  res.status(200).json({ message: "Authorized User" });
};
export const validateAdminUser = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "Unauthorized User" });

  jwt.verify(token, process.env.JWT_KEY, async (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    if (!user.isAdmin) {
      return res.status(403).json({ message: "Unauthorized User" });
    }
  });

  res.status(200).json({ message: "Authorized User" });
};
