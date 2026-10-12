

function magic(){
    let prenom = prompt('Quel est votre prenom ? ');
    prenom  = prenom.toString();

    let nom = prompt('Quel est votre nom ? ');
    prenom  = prenom.toString();

    let age = prompt('Quel est votre age ? ')
    age = Number(age);


    alert("Sapristi ! On ne m'avait pas prévenu que c'était vous, "
         +(prenom) 
         + " ! Euh... Je veux dire... Monsieur le grand magicien "
         +(nom)+ "! Cela fait déjà "
         +(age) 
         + " ans que vous faites rayonner notre contrée !");

    

}
magic();