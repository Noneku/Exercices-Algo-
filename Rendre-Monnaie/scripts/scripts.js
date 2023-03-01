let ticket = 20;
let amountCostumer = window.prompt(`Saissisez votre montant ci-dessous\n - Le prix du ticket est de ${ticket} €`);

if(prompt){
    if(amountCostumer > ticket){
        difference = amountCostumer - ticket;

        //Nombre de billets de 10
        Billet = difference / 10;
        //Nombre de piéces
        Pieces = difference % 10;

        if(Pieces > 5){
            PiecesMoney = `${Pieces} en piéces`;
        }
        // else {
        //     PiecesMoney = `${Pieces} en billet`
        // }

        //console.log(`Rendu : ${difference}\n Voici ${Math.round(Billet)} billets de 10 qui font ${Math.round(Billet) * 10} et ${PiecesMoney}`);
        console.log(8%5);
            
        }
    }


