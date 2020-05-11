document.addEventListener("DOMContentLoaded",()=> {
    //l'itération
    let i;
    let tab = ['html','css',false,true];

    for(i = 0; i < tab.length; i++){
        console.log("passage \n" + tab[i])//afficher 9
    }
    let x = 0;
    while(x < 10){
        
        x++;
        console.log("passage \n"+x)
        
    }
    let nom
    /*do{
        nom = prompt("ton nom stp?")
    } 
    while (!nom)
    console.log(nom)
    */
    //autres boucles 
    
    tab.forEach((v,k) => {
        console.log(v)
    })

    for(let key in tab){
        let valeur = tab[key]
        console.log(valeur)
    }
    //objet js
    let user = ({
    	nom : "Bob",
        prenom : "Leponge",
        age : 100,
            calc(){
                console.log(this.nom)
            }

    })
    
    user.calc()
    let autherUser  = Object.create(user)//instance
    autherUser.nom = "Paul"
    autherUser.calc()


    


})