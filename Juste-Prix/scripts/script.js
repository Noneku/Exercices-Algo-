// let Price = window.prompt("Entrer le prix");
// let Limite = 9;

// if (Price) {
//     console.log("Le jeux peux commencer !");

//     for (let limite = 0; limite < 10; limite++) {
//         let Game = window.prompt("Entrer une valeur, vite !");

//         if(Game != Price) {
//                     if(Game < Price){
//                         console.log("C'est plus !");
//                     }
//                     else {
//                         console.log("C'est moin !");
//                     } 
//                     console.log(`Il vous reste ${Limite--} tentative(s), vous avez perdu`);        
//                 }
//                 else{
//                     console.log("Vous avez gagné !");
//                 }
//     }
//     //Je ferme le jeux
//     Price = false;
// }

// if(Limite = 0){
//     console.log("Vous avez perdu ! ");
// }

let rdm = Math.floor(Math.random() * 100 + 1);
console.log(rdm);
let sommeUtilisateur;
let cpt = 1;
let message ="perdu";
let egale, plusGrand, plusPetit;
egale=cpt<11 && sommeUtilisateur === rdm;
plusGrand=sommeUtilisateur>rdm && cpt<11;
plusPetit=sommeUtilisateur<rdm  && cpt<11;

function getPrix(){
    sommeUtilisateur = document.getElementById("prix").value;  
    
    if (egale){
        message="Bravo vous avez trouvez " + cpt;
     
    } else if( plusGrand){
          message="trop élevé " + cpt;
           
        }  else if (plusPetit){
            message="trop bas " + cpt;
        }
        else {
            message="perdu" + cpt;
        }
        cpt++;
        console.log(message);
}