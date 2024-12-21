import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
  addNest,
  deleteNest,
  getAllNests,
  getNest,
  updateNest,
  getNestsByUser,
  getCityList,
} from "../controllers/nest.controller.js";

const router = express.Router();

router.get("/", getAllNests);
router.get("/:id", getNest);
router.get("/filter/city-list", getCityList);
router.post("/", verifyToken, addNest);
router.get("/user/:userId", getNestsByUser);
router.put("/:id", updateNest);
router.delete("/:id", deleteNest);

export default router;
