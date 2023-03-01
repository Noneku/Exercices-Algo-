let copyNumbers = prompt("Entrer le nombre de photocopie(s) souhaitées");
let tarifBase = 0.00;

if (copyNumbers <= 10) {
    tarifBase = 0.10;
    let Facture = tarifBase * copyNumbers;
    console.log(`Le montant de votre facture est de ${Facture}`);
}
if (copyNumbers > 10 && copyNumbers < 30){
    tarifBase = 0.09;
    let Facture = tarifBase * copyNumbers;
    console.log(`Le montant de votre facture est de ${Facture}`);
}
if(copyNumbers > 30){
    tarifBase = 0.08;
    let Facture = tarifBase * copyNumbers;
    console.log(`Le montant de votre facture est de ${Facture}`);
}




