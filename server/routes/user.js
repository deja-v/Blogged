import express from "express";
import { handleUserLogin, handleUserRegister } from "../controllers/user.js";

const router = express.Router();

router.post("/register", (req, res) => {
  handleUserRegister(req, res);
});

router.post("/login", (req, res) => {
  handleUserLogin(req, res);
});

export default router;
