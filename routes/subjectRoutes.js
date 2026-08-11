import express from "express";

const router = express.Router();

import {
  createUser,
  getUser,
  getById,
} from "../controllers/users.controller.js";

router.post("/", createUser);

router.get("/", getUser);

router.get("/:id", getById);

export default router;
