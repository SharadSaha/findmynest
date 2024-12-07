import express from "express";
import { verifyToken } from "../middleware/verifyToken,js";
import {
  getUserById,
  updateUserById,
  deleteUserById,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/:userId", verifyToken, getUserById);
router.put("/:userId", verifyToken, updateUserById);
router.delete("/:userId", verifyToken, deleteUserById);

export default router;
