document.addEventListener("DOMContentLoaded",()=>{
    console.log("loaded")
    //event
    let btn, slide, lampe
     btn = document.querySelector(".btn-default");
     slide =  document.querySelector("main > section")
     lampe = document.querySelector(".night");
     console.log(btn.innerText)

     btn.addEventListener("click",()=>{
         //window.alert(btn.tagName)
         btn.classList.toggle("btn-alert")//fonction booléane
         lampe.classList.toggle("lights")
         //condition ternaire
         btn.textContent == "Activer" ? btn.textContent = "Desactiver" : btn.textContent = "Activer";
        
         slide.classList.toggle("slider")
         
     })
})