let API="http://localhost:3000";
let moviespic = [];
document.getElementById("profile").addEventListener("change",async(e)=>{
    
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
        const base64 = await convertBase64(files[i]);
        moviespic.push(base64);
        
    }
    
    document.getElementById("imag1").src=moviespic[0];
    document.getElementById("imag2").src=moviespic[1];
    document.getElementById("imag3").src=moviespic[2];
    document.getElementById("imag4").src=moviespic[3];
})

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    form.addEventListener("submit", async (event) => {
       
        event.preventDefault();

       
        const name= document.getElementById("name").value
        const rating= document.getElementById("rating").value
        const screen = document.getElementById("screen").value
        const language = document.getElementById("language").value
        const duration = document.getElementById("duration").value
        const certified = document.getElementById("certified").value
        const type = document.getElementById("Type").value
        

        

        console.log(name ,rating,screen,language,duration,certified,type,moviespic);

        try {
            const res= await fetch(API+"/api/addmovie",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({name ,rating,screen,language,duration,certified,type,moviespic})
            })
            if(res.status==200){
                const {msg}=await res.json();
                alert(msg);
                
                
            }else{
                const {msg}=await res.json();
                alert(msg);
            }  
    
            
        } catch (error) {
            console.log(error);
            
        }

        
        
    });
})


function convertBase64(file){
    return new Promise((resolve, reject) =>{
        const fileReader=new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            resolve(fileReader.result)
        }
        fileReader.onerror=(error)=>{
            reject(fileReader.error)
        }
    })
}
