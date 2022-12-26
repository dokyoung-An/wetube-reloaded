import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";


const PORT = 4000;
const app = express(); 
const logger = morgan("dev") 




app.set("view engine","pug")
app.set("views",process.cwd()+"/src/views");
//form을 우리가 사용할 수 있는 js 형식으로 통역해 줌, 미들웨어 임. /라우터 넘어가기 전 req.body를 
//가지고 있게 해줌
app.use(express.urlencoded({extended:true}));

app.use("/",globalRouter);
app.use("/videos",videoRouter);
app.use("/users",userRouter)



app.use(logger)


const handleListening =() => console.log(`Server listening on port http://localhost:${PORT} ♥️`)

app.listen(PORT,handleListening);