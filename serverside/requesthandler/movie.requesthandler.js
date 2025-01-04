import movieSchema from "../models/movie.model.js"

export async function addMovie(req, res, ) {
    const {name ,rating,screen,language,duration,certified,type,moviespic}=req.body;
    console.log(name ,rating,screen,language,duration,certified,type);
    // console.log(moviespic);


    await movieSchema.create({name ,rating,screen,language,duration,certified,type,moviespic}).then(()=>{
        res.status(200).send({msg:"successfully added"})
    }).catch((err)=>{
        res.status(500).send({msg:err})
    })
    
    
    
}


export async function getMovies(req, res) {
    try {
        const movies = await movieSchema.find(); 
        res.status(200).send(movies);
    } catch (error) {
        console.error("Error fetching movies:", error);
        res.status(500).send({ msg: "Failed to fetch movies" });
    }
}


 export async function getSecondpage(req, res){
    const {_id}=req.params;
    const data=await movieSchema.findOne({_id})
    console.log(data);
    res.status(200).send(data);
     

    
}

export async function deleteMovie(req,res){
    const {_id}=req.params
       await movieSchema.deleteOne({_id})
       .then(()=>{
           res.status(200).send({msg:"Task deleted successfully"})
       })
       .catch((err)=>{
           res.status(500).send(err)
       })
    
}

export async function updateMovie(req,res){
    const {_id}=req.params
    const {name ,rating,screen,language,duration,certified,type}=req.body;
    await movieSchema.findByIdAndUpdate(_id,{name ,rating,screen,language,duration,certified,type})
       .then(()=>{
            res.status(200).send({msg:"Task updated successfully"})
       })
       .catch((err)=>{
            res.status(500).send(err)
       })
}
