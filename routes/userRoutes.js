import express from "express";

const router = express.Router();

import { createUser, getUser } from "../controllers/users.controller.js";

router.post("/", createUser);

router.get("/", getUser);

export default router;
