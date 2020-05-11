document.addEventListener("DOMContentLoaded",()=>{
    
    console.log("loaded")

    let el = document.querySelector('p')
    console.log(el.childNodes[0].nodeValue)

    let chrono = ()=>{
        let tic = el.innerText;
        el.innerText = tic - 1;
        console.log(tic)
        //tic == 5 ? alert("décompte : "+tic) : false;
        tic == 1 ? clearInterval(time) : 0;
        //test pour afficher un evenement 
        if(tic > 1){
            el.innerText = tic - 1;
        }
        else{
            setTimeout(()=>{
                el.innerHTML = '<img src="./image/boom.jpg">';
            },1000)
        }
    }
    
    //appel de la fonction chrono
    let time = setInterval(chrono, 1000);
 

})
/* opérateurs

= affectation / int x = 0
== comparaison entre 2 valeur
=== comparaison de valeur et de type
-
+
--
++
+=
-=
% modulo 10%3 = 1


*/


//compteur à rebours
/* 
int clearCompteur = 0;
int compteur = 10
    compteur > 0; compteur = compteur - 1
    compteur == 5 ? boom : true
    compteur == 1 ? clearCompteur : 0

*/
