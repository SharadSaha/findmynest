import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const { token } = req.cookies;
  console.log(req);
  if (!token) return res.status(401).json({ message: "Unauthorized User" });

  jwt.verify(token, process.env.JWT_KEY, async (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });

    req.userId = user.id;
    next();
  });
};
