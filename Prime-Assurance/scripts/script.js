const tarifsColor = ["Bleu","Vert","Orange","Rouge"];

//First Stage//
    //a driver under the age of 25 who has held the license for less than two years is awarded the red rate, 
    //if he has never been responsible for an accident. Otherwise, the company refuses the insurer.

    const limitAge = window.prompt("Quels âges avez vous ?");
        if (limitAge < 25) {
            timeDriverLicense = window.prompt("Depuis quand possédez-vous votre permis de conduire ?");
            //Check the number(s) of driver's licence years
            if(timeDriverLicense < 2){
                //Check the number(s) of accident(s)
                accident = window.prompt("Combien d'accident(s) ce sont produits au cours de ces derniers mois ?")
                if(accident >= 1){
                    console.log("Malheuresement, votre demande est REFUSE")
                }
                else {
                    colorTarif = console.log(`Vous allez pouvoir bénéficier du tarif ${tarifsColor[3]}`);
                }
            }
        }
//First Stage//

//Second Stage//
        if (limitAge > 25) {
            timeDriverLicense = window.prompt("Depuis quand possédez-vous votre permis de conduire ?");
            //Check the number(s) of driver's licence years
            if(timeDriverLicense < 2){
                //Check the number(s) of accident(s)
                accident = window.prompt("Combien d'accident(s) ce sont produits au cours de ces derniers mois ?")
                if(accident >= 1){
                    console.log(`Vous allez pouvoir bénéficier du tarif ${tarifsColor[2]}`);
                }
                else {
                    colorTarif = console.log(`Vous allez pouvoir bénéficier du tarif ${tarifsColor[2]}`);
                }
            }
}
//Second Stage//

