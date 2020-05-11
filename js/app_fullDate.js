document.addEventListener("DOMContentLoaded",()=>{
let month
 month = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juin",
        "Aout",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre"
        ]
//ajouter les jours

console.table(month)
let mois = new Date()
mois = month[mois.getMonth()]
let time = new Date()
let target = document.querySelector("p")
target.innerText = `Bonjour la date du jour
                    ${mois} : ${time.getFullYear()}`

})