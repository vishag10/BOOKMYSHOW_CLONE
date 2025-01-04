const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");
console.log(movieId);



async function getMovieDetails(_id) {
            const res=await fetch(`http://localhost:3000/api/secondpage/${_id}`,{method:"GET"});
            console.log(res);
            const data=await res.json();
            
            document.getElementById("session1").innerHTML=`
                <div class="session1"  style="background-image: linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%),url('${data.moviespic[1]}');">
                <div class="s1_2">
                <img src="${data.moviespic[0]}" class="s1img" alt="">
                <label>In cinemas</label>
            </div>
            <div class="s1_3">
                <h2>${data.name}</h2>
                <div class="s1d">
                   <img src="../img/star.png" alt="">
                   <h5>${data.rating}</h5>
                    <h6>(18.1K Votes)</h6>
                   <button>Rate now</button>
                </div>
                <button class="d2">${data.screen}</button>
                <button class="malayalam">${data.language}</button><br>
                <p class="dd">${data.duration} • ${data.type} • ${data.certified}</p><br>
                <button class="book">Book tickets</button><br>
                <div class="du"><button class="delete" onclick="deleteMovie('${movieId}')">delete</button><a href="./edit.html?id=${movieId}" class="edit">edit</a></div>
            </div>            
            `

}

getMovieDetails(movieId);



async function deleteMovie(_id){
    console.log(_id);
    const res=await fetch(`http://localhost:3000/api/deletemovie/${_id}`,
        {
            method:"DELETE",
            headers:{"Content-Type":"application/json"}
        }
    )
    if(res.status==200){
         alert("movie deleted successfully");
         window.location.href="../index.html";
    }

}


