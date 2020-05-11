document.addEventListener("DOMContentLoaded",()=>{
    
    let element = document.querySelector("p")
    
    let code;
    let i = 3;
        
        while(code!==2016){

            code = Number(prompt("Saisir le code?"));
            element.innerText ="Votre code est : "+code;
            alert(code+"\n"+("il reste"+(i--)+" essaies"));
            //tester les essaies
            if(i > 3 || i < 0){
                alert("Désolé opération abbandonnée");
                breack;//sortie du programme
            }

        }
    
    //tester 3 essaies pour un code
   /*
   initialiser code
   initialiser les essaies

   tant que code différent de code
        alors condition vérifier nombre d'essaies
            i = i - 1

            si i > 3 ou i<0
            afficher "Abort"
            Sortir du programme
   
   */ 



})