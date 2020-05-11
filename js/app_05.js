document.addEventListener("DOMContentLoaded",()=>{
    console.log("loaded!!!")
    let x, y, z

    x = 0.9
    y = 0.5
    console.log(Math.round(x))
    console.log(Math.floor(y))
    //random
    let getRandom = (number)=> {
        return Math.floor(Math.random() * Math.floor(number));

      }

      console.log(getRandom(3))
    //Exercice phrase aléatoires
    
    
    // méthode switch conditionnel

    let code_bon = "0101"
    let code_mauvais = "0000"
    let el = document.querySelector("p");
    let code;
    let btn = document.querySelector("h1")
    
    let access = () =>{
    code = prompt("Saisir le code")
    switch(code){
        case code_mauvais : el.innerText = "Accés refusé", el.style.color="rgb(200,0,0)";
            break;
        case code_bon : el.innerText = "Accés accordé", el.style.color="rgb(0,200,0)";
            break;
        default : el.innerText = "Accés refusé", el.style.color="rgb(200,0,0)";
    }
}
btn.addEventListener("click",access,false)

      
})