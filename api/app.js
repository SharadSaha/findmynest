import express from "express";
import postRoutes from "./routes/post.route.js";
import authRoutes from "./routes/auth.route.js";
import testRoutes from "./routes/test.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

const PORT = 8080;

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${8080}...`);
});
