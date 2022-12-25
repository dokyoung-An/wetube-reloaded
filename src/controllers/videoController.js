export const trending = (req,res) => res.render("home",{pageTitle:"Home",potato:"tomato"})

export const see = (req,res) => res.render("see",{pageTitle:"SEE"});

export const edit = (req,res) => res.render("edit",{pageTilte:"Edit"});

export const search = (req,res) =>res.send("search")
export const remove = (req,res) =>
{
    return res.send("Remove video")
}
export const upload = (req,res) =>res.send("Upload Video")
