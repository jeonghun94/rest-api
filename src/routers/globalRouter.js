import express from "express";
import { userList, userDetail, home, userCreate } from "../controllers/userController";

const globalRouter = express.Router();


globalRouter.route("/").get(home);
globalRouter.route("/user").post(userCreate).get(userList);
globalRouter.route("/user/:shopCode([0-9]{4})").get(userDetail);

export default globalRouter;