document.addEventListener('DOMContentLoaded',()=>{
	
	//sert à charger d'abord tous les éléments du DOM
	
	console.log("Loaded");
    //ES6
	let msg = "ES6"
	console.log(msg)
	let valeurINT = 140
		valeurINT = valeurINT - 40
	console.log(valeurINT)
	console.log(typeof valeurINT)//number
	console.log(typeof msg)//string
	//déclaration contextuelle
	let user, nombre, version, status
		user = "Eich" //String
		nombre = 2019 //Number
		version = 6.5 //float ou double
		status = true //boolean
	console.log(typeof status)
	let printout = parseFloat(version)
	console.log(printout + nombre)
	let one = 1, two = 2, word="hello"
	console.log(`${one} ${word} fin du script`)
	// (one + two)
	let tab = ["html","js","css"]
	console.table(tab)
	let tabadd =["PHP","SQL",...tab]//spread opérateur ...
	console.table(tabadd)
	//les fonctions
	let calc = (n)=>{ //function init
		return n+n
	}
	let outPut = calc(2)
	console.log(outPut) //function appelée
	



})