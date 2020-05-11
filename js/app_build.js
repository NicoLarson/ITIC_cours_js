document.addEventListener("DOMContentLoaded",()=>{
    console.log("loaded")
    //exemple 2 objet et constructeur
   
        let User = ({
            //builder
            constructor(nom, prenom, dates){
                this.nom = nom;
                this.prenom = prenom;
                this.dates = dates;
            },
            //méthode pour la description
            printOut(){
                let desc = this.nom+" "+this.prenom+" "+this.dates
                
                console.log(desc)
                return desc //retourne le résultat de mes propriétés
            }
            
        })
    

        console.log(User)
        //trouver comment faire
        let user_1 = Object.create(User)
        let user_2 = Object.create(User)
        user_1.constructor(
            "Eich","Brad", 2019
            )
        user_1.printOut()
        user_2.constructor("Berners","lee", 1990)
        user_2.printOut()

        let capture = []
            capture.push(user_1, user_2)
            console.table(capture)

       
})