import express from "express";
import { authLogin } from "./auth.controller.js";

const router = express.Router();

router.route("/login").post(authLogin);

export default router;
