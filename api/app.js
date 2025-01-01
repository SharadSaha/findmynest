import express from "express";
import nestRoutes from "./routes/nest.route.js";
import authRoutes from "./routes/auth.route.js";
import testRoutes from "./routes/test.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

const PORT = 8080;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/nest", nestRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${8080}...`);
});
