import express from "express";
import {
  login,
  logout,
  register,
  updateUser,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.put("/:userId", updateUser);

export default router;
