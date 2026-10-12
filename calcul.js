
function calculerIMC(poids, taille){ 

     let tailleEnMetre = taille/100 ;

     let resultat      = (poids/tailleEnMetre **2 ) ;

     //console.log(resultat);

     return resultat ;
     
     //alert(calculerIMC);

}

let poids = prompt('Quel est votre poids ? en (Kg)');
     //poids     = Number(poids);

let taille = prompt('Quel est votre taille ? (Cm)');
     //taille     = number(taille);

 alert(calculerIMC(poids, taille));