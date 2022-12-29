import express from "express"
import morgan from "morgan";
import { getEdit,getUpload,postEdit,postUpload,watch } from "../controllers/videoController";


const videoRouter = express.Router();




videoRouter.route("/:id([0-9a-f]{24})").get(watch)
//하나의 url에 get 이랑 post랑 같이 쓸 때 사용함
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);

//upload를 맨위에 둬서 id와 헷깔리지 않게 하던지, 아니면 id 뒤에 ([0-9a-f]{24})를 사용하던지


export default videoRouter