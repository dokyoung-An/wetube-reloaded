// const fakeUser = {
//     username:"Nicolas",
//     loggedIn:false,

// }

let videos = [
    {
     title:"Fitst Video",
     rating:5,
     comments:2,
     createAt:"2 minutes ago",
     views:1,
     id:1
    },
    {
     title:"second Video",
     rating:5,
     comments:2,
     createAt:"2 minutes ago",
     views:59,
     id:2
    },
    {
     title:"third Video",
     rating:5,
     comments:2,
     createAt:"2 minutes ago",
     views:59,
     id:3
    }
 ];


export const trending = (req,res) => {
    return res.render("home",{pageTitle:"Home",videos})
}
export const watch = (req,res) => {
   const {id} = req.params
   const video = videos[id-1]
    
    return (
    res.render("watch",{pageTitle:`Watching ${video.title}`, video})
    )
}
//화면에 보여주는 녀석
export const getEdit = (req,res) => {
    const {id} = req.params
    const video = videos[id-1]
    return res.render("edit",{pageTitle:`Editing : ${video.title}`, video})
};
//데이터를 서버로 보내는 녀석
export const postEdit = (req,res) => {
    const {id} = req.params;
    const {title} = req.body;
    videos[id-1].title = title;
    return res.redirect(`/videos/${id}`);
}

export const getUpload = (req,res) => {
    return res.render("upload",{pageTitle:"Upload Videos"});
}

export const postUpload = (req,res) => {
    //here we will add a video to the video array.

    return res.redirect("/")
}