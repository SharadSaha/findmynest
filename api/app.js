import express from "express";
import nestRoutes from "./routes/nest.route.js";
import authRoutes from "./routes/auth.route.js";
import testRoutes from "./routes/test.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/nest", nestRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}...`);
});
