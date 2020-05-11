document.addEventListener("DOMContentLoaded",()=>{
    //tableau d'objet
//http://www.sharemycode.fr/gt9
let eleves = [ /* x,y */

                {
                    nom : 'Marc', //0
                    moyenne : 5,
                    email : 'marco@gmail.com'
                },
                {
                    nom : 'Joe', //1
                    moyenne : 20,
                    email : 'joe@gmail.com'
                },
                {
                    nom : 'Caroline', //2
                    moyenne : 12,
                    email : 'caro@gmail.com'
                }
            ]
    //boucle du tableau sur la console et puis sur le DOM dans une liste

    console.table(eleves)
    console.log(typeof eleves)
    console.log(JSON.stringify(eleves))
    //console.log(eleves[0].nom)
    // i = itérateur => boucle
    const moyenne = 10
    let printOut = "";
    let el = document.querySelector("ul");

    for(let i = 0; i<eleves.length; i++){
        console.log(`
                    ${eleves[i].nom} 
                    ${eleves[i].moyenne} 
                    ${eleves[i].email}
                    `)
        //afficher ceci dans le DOM
        printOut+=`<li>${eleves[i].nom}, ${eleves[i].moyenne}
         : <a href="mailto:${eleves[i].email}">${eleves[i].email}</a></li>`
    
        if(eleves[i].moyenne < moyenne){
          console.log(eleves[i].nom+' : '+eleves[i].moyenne) 
        }
        

    }
    
    el.innerHTML = printOut

})