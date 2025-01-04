const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");
console.log(movieId);

async function getMovieDetails(_id) {
    const res=await fetch(`http://localhost:3000/api/secondpage/${_id}`,{method:"GET"});
    console.log(res);
    const data=await res.json();
    
    document.getElementById("form").innerHTML=`
                  <div class="head">
                <h3>ADD MOVIES</h3>
            </div>
          
          <div class="bodydiv" id="bodydiv">
            <div class="leftform">
                <div class="divs">
                    <label for="name">Name  </label>
                    <input type="text" id="name" name="name" value=${data.name} required placeholder="Marco">
                </div>
                <div class="divs">
                    <label for="name">Rating </label>
                    <select name="" id="rating">
                        <option >${data.rating}</option>
                        <option >1/10</option>
                        <option >2/10</option>
                        <option >3/10</option>
                        <option >4/10</option>
                        <option >5/10</option>
                        <option >6/10</option>
                        <option >7/10</option>
                        <option >8/10</option>
                        <option >9/10</option>
                        <option >10/10</option>
                    </select>
                </div>
                <div class="divs">
                    <label for="name">Screen</label>
                    <select name="" id="screen">
                        <option >${data.screen}</option>
                        <option >2D</option>
                        <option >3D</option>
                    </select>
                </div>
                <div class="divs">
                    <label for="name">Language</label>
                    <select name="" id="language">
                        <option >${data.language}</option>
                        <option >English</option>
                        <option >Malayalam</option>
                        <option >Hindi</option>
                        <option >Telugu</option>
                        <option >Tamil</option>
                    </select>
                </div>
                <div class="divs">
                    <label for="name">Duration </label>
                    <input type="text" id="duration" name="duration" value=${data.duration}   required placeholder="1h 58m">
                
                </div>
                <div class="divs">
                    <label for="name">Certified</label>
                    <select name="" id="certified">
                        <option >${data.certified}</option>
                        <option >A</option>
                        <option >U</option>
                        <option >U/A</option>
                    </select>
                </div>
                <div class="divs">
                    <label for="name">Genre </label>
                    <input type="text" id="Type" name="seats" value=${data.type} required placeholder="Adventure, Animation,Drama">
                </div>
           
            </div>
            <div class="rgtform">
                <div class="file">
                    <input type="file" id="profile" multiple >
                </div>
                <div class="picsdiv">
                    <div class="box">
                        <img id="imag1" src="${data.moviespic[0]}" alt="">
                    </div>
                    <div class="box">
                        <img id="imag2" src="${data.moviespic[1]}" alt="">
                    </div>
                    <div class="box">
                        <img id="imag3" src="" alt="">
                    </div>
                    <div class="box">
                        <img id="imag4" src="" alt="">
                    </div>

                </div>
            </div>
          </div>
          <div class="footer">
            <button onclick="updateMovieDetails('${movieId}')">update</button>
          </div>
    `

}

getMovieDetails(movieId);

async function updateMovieDetails(_id){
    document.getElementById("form").addEventListener("submit", async (event) => {
        event.preventDefault();
    const name= document.getElementById("name").value
        const rating= document.getElementById("rating").value
        const screen = document.getElementById("screen").value
        const language = document.getElementById("language").value
        const duration = document.getElementById("duration").value
        const certified = document.getElementById("certified").value
        const type = document.getElementById("Type").value
        console.log(name ,rating,screen,language,duration,certified,type);

        const res = await fetch(`http://localhost:3000/api/updatemovie/${_id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({name ,rating,screen,language,duration,certified,type})
        });
        if (res.status === 200) {
            alert("updated successfully");
            getMovieDetails(movieId);
        }
})
}