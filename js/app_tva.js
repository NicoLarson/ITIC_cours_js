document.addEventListener("DOMContentLoaded",()=>{

   let prix_1, prix_2, total_ht, tva, stock, printout
   
   printout = document.querySelector("ul")
   prix_1 = Number(prompt("Votre 1er prix"))
   prix_2 = Number(prompt("Votre 2eme prix"))

   total_ht = (prix_1 + prix_2);
   tva = 0.196 /* mult 19.6 div 100 */

   //stock produits
   stock = []//mémoire

   stock.push(prix_1, prix_2)//compter les prod

   console.log("HT : "+total_ht)
   console.log("TVA "+(total_ht*tva).toFixed(2))
   console.log("TTC "+(total_ht+total_ht*tva).toFixed(2))
   console.log("Nombre de produits : "+stock.length)
   
   printout.innerHTML+=`<li>HT : ${total_ht}</li>
                        <li>TVA : ${(total_ht*tva).toFixed(2)}</li>
                        <li>TTC : ${(total_ht+total_ht*tva).toFixed(2)}
                        <li>Nombre de produits : ${stock.length}</li>
                        
                        
                        `
})
//no script


