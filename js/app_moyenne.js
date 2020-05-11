document.addEventListener("DOMContentLoaded", ()=>{

//tableau en largeur
//let tab = []

let notes, moyenne, i;
const nombreNotes = 6
    notes=[nombreNotes];
    notes[0] = 12.5;
    notes[1] = 7.5;
    notes[2] = 6;
    notes[3] = 10;
    notes[4] = 14;
    notes[5] = 13.5;

    moyenne = 0
    //intérateur
    for(i = 0; i<nombreNotes; i++){
        notes[i] > 13.5 ? console.log("meilleur notes "+notes[i]) : false;
        moyenne += notes[i];
    }
    console.log("total "+moyenne)
    
    moyenne /= nombreNotes;

    console.log("Votre moyenne générale est de "+parseFloat(moyenne.toFixed(2)))


})