import express from "express"
import morgan from "morgan";
import { edit, see,remove,upload } from "../controllers/videoController";


const videoRouter = express.Router();



videoRouter.get("/upload",upload)
videoRouter.get("/:id(\\d+)",see);
videoRouter.get("/:id(\\d+)/edit",edit)
videoRouter.get("/:id(\\d+)/delete",remove)



export default videoRouter