import express from "express"
import morgan from "morgan";
import { getEdit,getUpload,postEdit,postUpload,watch } from "../controllers/videoController";


const videoRouter = express.Router();




videoRouter.route("/:id(\\d+)").get(watch)
//하나의 url에 get 이랑 post랑 같이 쓸 때 사용함
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);


videoRouter.route("/upload").get(getUpload).post(postUpload);


export default videoRouter