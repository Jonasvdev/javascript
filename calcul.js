
function calculerIMC(poids, taille){ 

     let tailleEnMetre = taille/100 ;

     let resultat      = (poids/tailleEnMetre **2 ) ;

     //console.log(resultat);

     return resultat ;
     
     //alert(calculerIMC);

}

let poids = prompt('Quel est votre poids ? en (Kg)');
     poids     = Number(poids);

let taille = prompt('Quel est votre taille ? (Cm)');
     taille     = number(taille);

 alert(calculerIMC(poids, taille));


 //LES CONDITIONS SWITCH

 let consommable = "chocolat";

switch(consommable) {

    case "courgette":
    case "carotte":   
    case "pomme de terre":
        console.log('Ceci est un légume');
        break;
    
    case "banane":
        console.log('Ceci est un fruit');
        break;

    default:
        console.log('Ceci n\'est ni un fruit ni un légume');

}


let gareDeDepart = "Valenciennes";
let gareDArrivee = "";
let chauffeur = "";

if((gareDeDepart != "" || gareDArrivee != "") && chauffeur != "") {
  console.log('Le train va démarrer');
}
else {
  console.log('Le train ne peut pas démarrer');
}