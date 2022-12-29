import Video from "../models/video";
import { formatHashtags } from "../models/video";

// const fakeUser = {
//     username:"Nicolas",
//     loggedIn:false,

// }



// export const home = (req,res) => {
  
//     Video.find({},(error,videos) => {
//         return res.render("home",{pageTitle:"HOME", videos:[]})
// });
// };

// export const home = async(req,res) => {
//     try{
//     const videos = await Video.find({})
//     return res.render("home",{pageTitle:"Home",videos});
//     } catch(error) {
//         return res.render("server-error",error)
//     }
// }

export const home = async(req,res) => {
    const videos = await Video.find({});
    console.log(videos);
    return res.render("home",{pageTitle:"Home", videos});
}
export const watch = async (req,res) => {
   const {id} = req.params
   const video = await Video.findById(id);
   console.log(video)
   if(!video) {
    return res.render("404",{pageTitle:"Video not found"})
   }
   return res.render("watch",{pageTitle:video.title, video})
  
}
//화면에 보여주는 녀석
//에러코드를 먼저 실행하고 다음 코드를 적어 넣야 함. return을 적지 않으면 코드가 종료되지 않기에
//return을 꼭 적어줘야 함
export const getEdit = async (req,res) => {
    const {id} = req.params
    const video = await Video.findById(id);

    if (!video) {
    return res.render("404",{pageTitle:"Video not found."})
    }
    return res.render("edit",{pageTitle:`Editing: ${video.title}`,video})
};
//데이터를 서버로 보내는 녀석
export const postEdit = async (req,res) => {
    const {id} = req.params;
    const {title,description,hashtags} = req.body;

    const video= await Video.exists({_id:id});
    if(!video){
        res.render("404",{pageTitle:"Video not found"})
    }
    await Video.findByIdAndUpdate(id,{
        title,
        description,
        hashtags:formatHashtags(hashtags),
    }
        )
   
    // 찾은 비디오에 저장을 해줘라
    await video.save();

    return res.redirect(`/videos/${id}`);
}

export const getUpload = (req,res) => {
    return res.render("upload",{pageTitle:"Upload Video"});
}

export const postUpload = async (req,res) => {
    //here we will add a video to the video array.
    const {title, description, hashtags} = req.body
  
    try{
        await Video.create({
            title,
            description,
            createAt:Date.now(),
            hashtags:formatHashtags(hashtags),
        });
        return res.redirect("/");
    } catch(error) {
        console.log(error);
        return res.render("upload",{
            pageTitle:"Upload Video", 
            errorMessage:error._message,
        });
    }

};  