//initialiser le script js
document.addEventListener('DOMContentLoaded',(event)=>{ //main script
    event.preventDefault()
    //DOM => html vs BOM
    // tester le script
    
    console.log("loaded")//objet, méthode et valeur
    //document.location.reload(true)
    let el = document.querySelector("main")
    let entete = document.querySelector("h1")
    let btn = document.querySelector("button")
    let message = document.querySelector("p")
    console.log(el.getAttribute("class"))
    console.log(entete.childNodes[0].nodeValue)

    
    //la fonction version ES6 2015 vs ES5
   
    let traslateColor = ()=>{
        
        let userChoice, warning;
        userChoice = prompt("Choisir une couleur (vert, rouge, bleu)")
        warning = document.querySelector(".warning")
        switch(userChoice){
            case 'rouge' :
                //window.alert("la couleur est "+ userChoice)
                message.style.color = "rgb(200,0, 0)";
                warning.style.display = "none";
                message.innerText = `la couleur choisi est ${userChoice} et rouge en gb c'est red`//concatenation

                console.log("la couleur est "+userChoice)
            break;
            case 'vert' :
                message.style.color = "rgb(0,200, 0)";
                warning.style.display = "none";
                message.innerText = `la couleur choisi est ${userChoice} et vert en gb c'est green`
            break;
            case 'bleu' :
                message.style.color = "rgb(0,0,200)";
                warning.style.display = "none";
                message.innerText = `la couleur choisi est ${userChoice} et bleu en gb c'est bleue`
            break;
            //Définir l'action par défaut
            default :
                //alert("Je ne connais pas la couleur")
                warning.style.display = "block";
                warning.innerText = "je ne connais pas la couleur!!!"
            break;

        }

  }
  //callback de la fonction
  btn.addEventListener("click", traslateColor, false)

    



    

})
