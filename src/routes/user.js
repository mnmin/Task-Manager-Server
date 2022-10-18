import { Router } from "express";
import { createUser, getUserById } from "../controllers/user.js";

const router = Router();

router.post("/", createUser);
router.get("/:id", getUserById);

export default router;
