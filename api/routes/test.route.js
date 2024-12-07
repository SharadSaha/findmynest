import express from "express";
import {
  validateAdminUser,
  validateLoggedInUser,
} from "../controllers/test.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/logged-in-validate", verifyToken, validateLoggedInUser);
router.get("/admin-validate", validateAdminUser);

export default router;
