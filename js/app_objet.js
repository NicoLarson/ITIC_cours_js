document.addEventListener("DOMContentLoaded",()=>{
    console.log("loaded")
    //object
    let target = document.querySelector("main > ul")

    let user = ({})
    console.log(typeof user) //objet

    let Produits = {
        marque : "Samsung",
        prix : 450,
        annee : 2019,
        photo : "./image/1489769906_cup.png",
            printOut(){
                
                        
                 target.innerHTML+=`<li>Marque : ${this.marque}</li>
                <li>Prix : ${this.prix}</li>
                <li>Année: ${this.annee}</li>
                <li><img src="${this.photo}" alt="logo">
                </li>
                `
            }
        }

        Produits.printOut()//méthode pour afficher le 1er objet
        let newProduit = Object.create(Produits);//instance d'objet
        newProduit.marque = "Apple"
        newProduit.prix = 2000
        newProduit.annee = 2019
      
        newProduit.printOut()
        let bdd = ["Azus", 700, 2018]
        let newProduits = Object.create(Produits);//instance d'objet
        newProduits.marque = bdd[0]
        newProduits.prix = bdd[1]
        newProduits.annee = bdd[2]
      
        newProduits.printOut()
})