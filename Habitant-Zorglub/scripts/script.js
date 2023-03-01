let terminalAge = prompt("Quel est votre âge ?");

let Age = terminalAge;

let terminalSex = prompt("Quel est votre sex ? (Répondez par F pour femme ou H pour Homme");

let Sex = terminalSex;

if(Sex === "H" && Age > 20) {
    console.log("Vous êtes imposable");
}
else {
    console.log("Vous n'êtes pas imposable");
}

if(Sex === "F" && Age >= 18 && Age <= 35) {
    console.log("Vous êtes imposable");
}
else {
    console.log("Vous n'êtes pas imposable");
}
