//début du script initialisation

document.addEventListener("DOMContentLoaded",(event)=>{
    event.preventDefault()

    let msg = "Hello"
    const version = 7.5, titre = "Cours js &amp; html"
    console.log(`Type de variable ${typeof msg}`)//6,7,8 concaténation sorti console
    //console.log(typeof "Type de variable \n" + msg) version 5
    console.log(version)
    const lang = ["Ecmascript","React",true] //tableau
    //lang = ["js","React",false]
    console.log(typeof parseFloat(version))// index et la valeur
    
    //function
    let calculer = (nom, prenom, age)=>{ 
        
        return `Bonjour ${nom} ${prenom} vous avez ${age} ans`
    }

    let presentation = ()=>{
        console.log("Hello cours js")
      
    }
    
    presentation()//hello

    //dom
    //let titre = presentation()
    let el_title = document.querySelector('header > h1') //par defaut c'est le premier
                    //document.getElementsByTagName('p')[0]
                    //document.getElementsByClassName('heading')[0]
                    //document.getElementById("clear")
                    //document.getElementsByName("nom")[0]
    console.log(el_title.innerHTML);

    el_title.innerHTML = `<strong> ${titre} <strong>` //innerText, textContent, innerHTML



    console.log(calculer("Bob","Itch",30))
    console.log(titre)
    
    let data = []
    let nombre = parseFloat(prompt("ajoutez un chiffre"))//Not a Number
    let signin = prompt("ajoutez une signature")//Not a Number
    console.log(nombre)
    console.log(typeof nombre)//type de variable
    
    //pour mettre des données dans un tableau
    data.push(nombre,signin)
    
    console.table(data)

    localStorage.setItem("donnée",JSON.stringify(data));//stockage local





})
/* 
    assembler 01001100
    C
    C++
    C#
    typeScript => Angular
    React => MS
    Python => django
    Java
    PHP => Synfony, Laravel
    Node js => EJS, Vue js

*/