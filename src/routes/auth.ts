import { Router } from "express";
import { signup } from "../controllers/authController";


const authRoutes: Router = Router();

authRoutes.post('/signup', signup)

export default authRoutes;