import express from "express";
import { authLogin, authRegister } from "./auth.controller.js";
import { middlewareRegister } from "../middleware/auth.middleware.js";

const router = express.Router();

router.route("/login").post(authLogin);
router.route("/register").post(middlewareRegister, authRegister);

export default router;
