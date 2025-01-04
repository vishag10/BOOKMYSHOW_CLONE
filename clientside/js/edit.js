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
                        <option >2D</option>
                        <option >3D</option>
                    </select>
                </div>
                <div class="divs">
                    <label for="name">Language</label>
                    <select name="" id="language">
                        <option >English</option>
                        <option >Malayalam</option>
                        <option >Hindi</option>
                        <option >Telugu</option>
                        <option >Tamil</option>
                    </select>
                </div>
                <div class="divs">
                    <label for="name">Duration </label>
                    <input type="text" id="duration" name="duration" required placeholder="1h 58m">
                
                </div>
                <div class="divs">
                    <label for="name">Certified</label>
                    <select name="" id="certified">
                        <option >A</option>
                        <option >U</option>
                        <option >U/A</option>
                    </select>
                </div>
                <div class="divs">
                    <label for="name">Genre </label>
                    <input type="text" id="Type" name="seats" required placeholder="Adventure, Animation,Drama">
                </div>
           
            </div>
            <div class="rgtform">
                <div class="file">
                    <input type="file" id="profile" multiple >
                </div>
                <div class="picsdiv">
                    <div class="box">
                        <img id="imag1" src="" alt="">
                    </div>
                    <div class="box">
                        <img id="imag2" src="" alt="">
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
            <a href="../index.html"><button>Add</button></a>
          </div>
    `

}

getMovieDetails(movieId);