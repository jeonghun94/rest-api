import globalRouter from "./routers/globalRouter";
import express from "express";
import morgan from "morgan"
import { poolMiddleware } from "./middleware";

// 설정 
const app = express();
const logger = morgan("dev");

// 미들웨어
app.set("view engine", "pug");
app.set("views",process.cwd() + "/src/views");
app.use(express.static(process.cwd() + "/src/assets"));
app.use(logger);
app.use(express.urlencoded({ extended: true }));

// 라우터
// app.use(poolMiddleware);
app.use("/static", express.static("assets"));
app.use("/", globalRouter);

export default app;


