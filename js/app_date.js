/* 
prototype js

objet user
        propriétés
        méthodes
        instances
*/
document.addEventListener("DOMContentLoaded",()=>{ //Document Object Model
    
    //BOM Broswer Object Model

    let test = document.contentType;//text html = string
    let nav = navigator.userAgent;
    console.log(nav)
    console.log(typeof navigator)//string

    //objet date
    let d = new Date()
    //console.log(d)
    let n = d.toLocaleDateString()//06/04/2020
    console.log(n)
    console.log(d.getFullYear())
    console.log(d.getHours())
    //timeZone
    console.log(event.toLocaleString('en-GB', { timeZone: 'UTC'}));

})


