document.addEventListener("DOMContentLoaded",()=>{
    console.log("loaded")
    //pourquoi on met en place cette fonction générale
    let print_out = document.querySelector("main > p")
    let points = Number(0);
    let winner = document.querySelector(".winner")
    let prix = document.querySelector(".winner > img")
    let questions_1, questions_2, questions_3;
        questions_1 = parseInt(prompt("Découverte de l'Amérique?"))
        //conditions
        switch(questions_1){
            case 1492:
                alert("bonne réponse")
                points++
                print_out.innerText = "Bonne réponse nb pts : "+points

            break;
            default :
                alert("Mauvaise réponse")
                print_out.innerText = "Mauvaise réponse nb pts : "+points
            break;

        }
        //deuxième question premières pas sur la lune
        questions_2 = parseInt(prompt("Premier homme sur la lune?"))
        switch(questions_2){
            case 1969 :
                alert("bonne réponse")
                points++
                print_out.innerText = "Bonne réponse nb pts : "+points
            break;
            default :
                alert("Mauvaise réponse")
                print_out.innerText = "Mauvaise réponse nb pts : "+points
            break;

        }
        //question 3
        questions_3 = parseInt(prompt("Année de la révoulution française?"))
        switch(questions_3){
            case 1789 :
                alert("bonne réponse")
                points++
                print_out.innerText = "Bonne réponse : nb pts "+points
            break;
            default :
                print_out.innerText = "Mauvaises réponse nb pts "+points
        }

        if(points == 3){
            winner.style.display = "block";
            prix.setAttribute("src","./image/1489769906_cup.png") //img | src ="" | alt=""
        }
        else if(points == 2){
            winner.style.display = "block";
            prix.setAttribute("src","./image/on.png")
        }
        else if(points == 1){
            winner.style.display = "block";
            prix.setAttribute("src","./image/smiley-triste.jpg")
        }
        else if(points == 0){
            winner.style.display = "block";
            prix.setAttribute("src","./image/boom.jpg")
        }
        
        //stocker les points

        localStorage.setItem("points",points)
        localStorage.setItem("image","./image/boom.jpg")
        sessionStorage.setItem("user",login)



})