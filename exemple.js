/* const age = prompt('entrez votre age :');

 alert('Bonjour vous avez ' + age + " ans");

function direBonjour() {
    alert("Bonjour toi ")
    
}

direBonjour()


function addition(nombreUn, nombreDeux) {
    console.log(nombreUn + nombreDeux)
    
 }

addition(5, 7);

function direBonjour() {
    const prenom = prompt('Entrez votre prenom');

    alert('Bonjour ' + prenom);
    
}
direBonjour();  

let crie;

function crieDeGuerre(){
    crie = "Toujours plus fort !";
    console.log(crie);
}

crieDeGuerre();

console.log(crie); 


let nombreUn = 4, nombreDeux = 7;

function addition(){
   let resultat = (nombreUn + nombreDeux)
   //console.log(resultat);  // affiche
   return resultat;
}

addition(); 


let preparation = 10, cuisson = 15;

function cuisiner(nombreDeGateaux, minutesDePreparation, minutesDeCuisson){
    let resultats = nombreDeGateaux * (minutesDeCuisson = 15 + (minutesDePreparation = 10))
    return resultats;
    
}

console.log(cuisiner(5)); 

function demanderAge(){

    let age = prompt('quel est votre age ?');
    age = parseInt(age);

    // age = parseFloat(age);

    // nombreEnString = nombre + "";
    // nombreEnString = nombre.toString();

 alert('Vous avez ' + age + " ans");

}
demanderAge();

function prevoirAge(){

    let age = prompt('Entrez votre age ?');
    age = Number(age);

 alert('Bientot vous aurez ' + (age +1) + " ans");

}
prevoirAge(); 


// FONCTION ANONYME

let fonctionAnonyme = function(){
    console.log('je suis une fonction anonyme');
} 
fonctionAnonyme(); */

(function(){ console.log('je suis une fonction anonyme')})();