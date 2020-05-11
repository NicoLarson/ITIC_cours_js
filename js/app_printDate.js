document.addEventListener('DOMContentLoaded', ()=>{ //main fonction
	console.log("chargé")
    let cOut = document.querySelector('p');
    let el = document.querySelector("h1");
	let myDate = ()=>{
		let jours = ["lundi","mardi","mercredi","jeudi","vendredi","Samedi","Dimanche"];
		let time = new Date();
		console.log(time.getFullYear())
		console.log(jours[time.getDay()-1])
		console.log(time.getHours()+' h '+time.getMinutes()+' '+time.getSeconds()+"s")
        
        cOut.innerText =time.getFullYear()+' '+jours[time.getDay()-1]+' '+time.getHours()+' h '+time.getMinutes()+' '+time.getSeconds()+"s"
    }
	
	
	let afficheDte = ()=>{
		let temps = new Date();
		let printOut = temps.toLocaleString();
		cOut.innerText = printOut;

	}
    //myDate()
    console.log(el.childNodes[0].nodeValue)
    el.childNodes[0].nodeValue = "Hello javascript"
    setInterval(afficheDte,1000);//montre les sécondes se dérouler
 
 
 })