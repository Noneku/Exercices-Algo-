let Price = window.prompt("Entrer le prix");
let Limite = 9;

if (Price) {
    console.log("Le jeux peux commencer !");

    for (let limite = 0; limite < 10; limite++) {
        let Game = window.prompt("Entrer une valeur, vite !");

        if(Game != Price) {
                    if(Game < Price){
                        console.log("C'est plus !");
                    }
                    else {
                        console.log("C'est moin !");
                    } 
                    console.log(`Il vous reste ${Limite--} tentative(s), vous avez perdu`);        
                }
                else{
                    console.log("Vous avez gagné !");
                }
    }
    //Je ferme le jeux
    Price = false;
}

if(Limite = 0){
    console.log("Vous avez perdu ! ");
}