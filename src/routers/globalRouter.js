import express from "express";
import { test } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.route("/").get(test);


export default globalRouter;