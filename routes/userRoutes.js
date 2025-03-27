import express from "express";
import {
  createUser,
  getUsers,
  getUserByFilter,
  updateUser,
  deleteUser
} from "../controllers/userController.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/filter", getUserByFilter);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
