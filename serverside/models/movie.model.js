import mongoose from "mongoose";

const movieSchema=new mongoose.Schema({
    name:{type:String, required:true},
    rating:{type:String, required:true},
    screen:{type:String, required:true},
    language:{type:String, required:true},
    duration:{type:String, required:true},
    certified:{type:String, required:true},
    type:{type:String, required:true},
    moviespic:{type:Array, required:true}


})
export default mongoose.model.Movielist||mongoose.model("Movielist",movieSchema)