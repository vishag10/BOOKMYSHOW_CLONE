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