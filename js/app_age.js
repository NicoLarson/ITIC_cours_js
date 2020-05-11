document.addEventListener("DOMContentLoaded",()=>{
    console.log("loaded")
    /* 
    Algo age

    age EST UN ENTIER
        
        "rentrer l'age"

        si age > 18 ALORS
                AFFICHER("Tu es majeur")
            SINON
                AFFICHER("tu es mineur")
            FIN SI


    age EST UN ENTIER
        "saisir l'age"
    confirmer EST UNE CHAINE
    
    SI age > = 18 && age < = 26
        SI confirmer
            ALORS 
                "merci d'avoir confirmer" //afficher dans le dom
            SINON
                "Annulation de votre demande"
        FIN SI

    SINON SI !age
            ALORS "Attention saisir votre age"
            recharger la page
        SINON
            massage "Votre age doit être comprise entre 18 et 26"
    FIN SI

    ****************************************************************
    REEL prix_1 
    REEL prix_2
    REEL total_ht <- 0
    REEL total_TTC <- 0
    REEL taxe <- 19.6
        DEBUT
            SAISIR prix_1
                AFFICHER prix_1 <- valeur
            SAISIR prix_2
                 AFFICHER prix_2 <- valeur
        PROCEDURE
            ADDITIONNER prix_1 + prix_2
            AFFICHER le résultat
            total_ht <- prix_1 + prix_2
            total_ht MULTIPLIER PAR taxe
            AFFICHER taxe
            total_TTC <- total_ht + taxe
            AFFICHER total_TTC

*/
   
    
    
    
    
    
    
    
    let age, confirmer;
        
        age = parseInt(prompt("Votre age?"))
        confirmer = confirm("Voulez-vous confirmer?")

        age >=18 && age <= 26 ? console.log("tu as une réduction") : console.log("pas de réduction")
                if(confirmer){
                    alert("ok")
                }
                else{
                    alert("ko")
                }


})
