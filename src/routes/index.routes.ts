import { Application } from "express";
import postRoute from "./posts.routes";
import authRoute from "./auth.routes";
import commentRoute from "./comment.routes";
import mediaRoute from "./media.routes";
import chatRoute from "./chat.routes";
import userRoute from "./user.routes";
import followRoute from "./follow.routes";
import likeRoute from "./like.routes";
import { jwtCheck } from "../middlewares/index.middlewares";

const routes = (app: Application) => {
    app.use("/api/posts", jwtCheck, postRoute);
    app.use("/api/auth", authRoute);
    app.use("/api/comments", jwtCheck, commentRoute);
    app.use("/api/media", mediaRoute);
    app.use("/api/chat", jwtCheck, chatRoute);
    app.use("/api/user", jwtCheck, userRoute);
    app.use("/api/follow", jwtCheck, followRoute);
    app.use("/api/like", jwtCheck, likeRoute);
};

export default routes;
