import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
  addNest,
  deleteNest,
  getAllNests,
  getNest,
  updateNest,
} from "../controllers/nest.controller.js";

const router = express.Router();

router.get("/", getAllNests);
router.get("/:id", getNest);
router.post("/", addNest);
router.put("/:id", updateNest);
router.delete("/:id", deleteNest);

export default router;
