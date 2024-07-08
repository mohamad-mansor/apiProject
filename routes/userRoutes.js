import express from "express";
import {
  createUser,
  getUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/users", createUser);
router.get("/users/:id", getUser);
router.put("/users/:id", updateUser);
router.patch("/users/:id", updateUser);

export default router;
