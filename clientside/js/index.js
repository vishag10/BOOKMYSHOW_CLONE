let API="http://localhost:3000";

async function log(){
    const token=localStorage.getItem("token")
    console.log(token);

    const res= await  fetch(API+"/api/home",{
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    if(res.status==200){
        const {username}= await res.json()
        document.getElementById("nav").innerHTML=`
                <img  src="./img/d3a23efb-7796-48f3-8c4e-e9a944abe1d1.svg" class="logo">
                <input type="text" class="input1" placeholder="Search For Movies,Events,Plays,Sports And Activities">
                <label for="" class="place">${username}</label>
                <img src="./img/down-arrow.png" alt="" class="dropdown">
                <a href="./pages/login.html" class="signa"><div class="sign">log out</div></a>
                <a href="./pages/add.html"  class="addm"><img src="./img/video-player.png" alt="" class="menu"></a>
        `
        
        
    }else{
        document.getElementById("nav").innerHTML=`
                
                <img  src="./img/d3a23efb-7796-48f3-8c4e-e9a944abe1d1.svg" class="logo">
                <input type="text" class="input1" placeholder="Search For Movies,Events,Plays,Sports And Activities">
                <label for="" class="place">${username}</label>
                <img src="./img/down-arrow.png" alt="" class="dropdown">
                <a href="./pages/login.html" class="signa"><div class="sign">Sign in</div></a>
                <img src="./img/menu.png" alt="" class="menu">
        `
        
    }
    
}

log()



async function getMovies(){
    try {
            const response = await fetch(API+"/api/getmovie");
            if (response.status === 200) {
                
                const movies = await response.json();
                console.log(movies);
                 str=``
                movies.forEach((movie) => {
                    

                   str+= `
                        <div class="scroll1">
                            <a href="./pages/secondpage.html?id=${movie._id}">
                             <div class="img1">
                                <img src="${movie.moviespic[0]}" alt="">

                            </div>
                            </a>
                            <div class="des">
                                <p class="s3p1">${movie.name}</p>
                                <p class="s3p2">${movie.type}</p>
                            </div>
                        </div>
                    
                    `;

                   
                });
                document.getElementById("session3").innerHTML = str;
                
        } 
        // else {
        //     const { msg } = await response.json();
        //     alert(msg || "Failed to fetch movies");
        // }
    } 
    catch (error) {
        // console.error("Error fetching movies:", error);
        // alert("An error occurred while fetching movies.");
    }
}


getMovies();



{/* <div class="movie-images">
${movie.moviespic
    .map((pic) => `<img src="${pic}" alt="${movie.name}" class="movie-pic">`)
    .join("")}
</div> */}