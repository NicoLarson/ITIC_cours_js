document.addEventListener("DOMContentLoaded",(event)=>{
    event.preventDefault()
    console.log("chargé!!!-)")
    //MDN Mozilla js
    //le constructeur => builder (constructor)
let Builder = function(nom, prenom, ville){ //ES 5
        this.nom = nom;
        this.prenom = prenom;
        this.ville = ville;
    }
   let maison = new Builder(
        "Eich",
        "Brandan",
        "LA"
   )
   let maison_1 = new Builder(
        "Tony",
        "Montana",
        "Miami"
    )
    let maison_2 = new Builder(
        "Actarus",
        "Prince",
        "Fore"
    )
   console.log(`${maison.nom} ${maison.prenom}`)
   //ajouter au tableau
   let tab_objet = []

   tab_objet.push(maison, maison_1, maison_2)//push(),pop(),join()
   console.log(tab_objet.includes(maison))//true
   //console.table(tab_objet)
   //console.log(tab_objet[1].nom)
   //afficher dans une liste le tableau tab_objet
   let printout =""
   let el = document.querySelector("ul")
        for(let index in tab_objet){
            console.log(tab_objet[index].nom+'\n'+tab_objet[index].prenom+'\n'+tab_objet[index].ville)
            printout +=`
                    <li>Nom : ${tab_objet[index].nom}</li>
                    <li>Prénom : ${tab_objet[index].prenom}</li>
                    <li>Ville : ${tab_objet[index].ville}</li>
                    `

        }
    el.innerHTML = printout

    


})