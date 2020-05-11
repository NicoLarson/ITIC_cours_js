document.addEventListener("DOMContentLoaded",()=> {
    let nom, prenom, ville, age
    let parent = document.querySelector("main")//référence parent
    let el  = document.createElement("ul")
    parent.appendChild(el)
    //prompt
    nom = prompt("Votre nom")
    prenom = prompt("Votre prenom")
    ville = prompt("Votre ville")
    age = parseInt(prompt("votre age"))
    el.innerHTML+=`<li> Nom : ${nom} </li> 
                        <li> Prénom : ${prenom} </li> 
                        <li> Ville  : ${ville} </li> 
                        <li> Age : ${age} </li>`

})