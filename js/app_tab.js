document.addEventListener("DOMContentLoaded",()=>{
    //concept de l'objet
    
    let target = document.querySelector("main > ul")
    User = {
       
        nom : "Gius",
        prenom : "Brandan",
        ville : "LA",
        cp : 92000
    }
    //instance d'User
    let newUser = Object.create(User);
        newUser.nom = "Tom"
        console.log(newUser.nom)
        

    //console.log(typeof User.target)
    sessionStorage.setItem("user",User.nom)//stockage dans le navigateur
    console.table(User)

    for(key in User){ //boucle sur l'objet User
       
        value = User[key]
        console.log(key+" "+value)
        target.innerHTML += `<li>${key} : ${value}</li>`
    }
    //ajouter à la boucle
    target.innerHTML += `<li>Nom : ${newUser.nom}</li>`//instance de User.nom

    //http://www.sharemycode.fr/vn6

})