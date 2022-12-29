import mongoose from "mongoose";

export const formatHashtags = (hashtags) =>
hashtags.split(",").map((word) => (word.startsWith('#') ? word : `#${word}`))


// 데이터에 대한 구체적 설정은 정말 정말 중요하다!!
const videoSchema = new mongoose.Schema({
    title:{type:String, required:true, trim:true, maxLength:80},
    description:{type:String, required:true, trim:true, minLength:20},
    createAt:{type:Date, required:true, default:Date.now},
    hashtags:[{type:String, trim:true}],
    meta:{
        views:{type:Number, default:0, required:true},
        rating:{type:Number, default:0, required:true},
    },
});

// save이벤트가 실행될 때 실행되는 미들웨어
// videoSchema.pre('save', async function() {
//     this.hashtags = this.hashtags[0].split(',').map(word => word.startsWith('#') ? word:`#${word}`)
  
// })



const Video = mongoose.model("Video",videoSchema);

export default Video;


