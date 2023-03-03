
let T = [8,2,9,4,1,7,3];
let N = T.length;

let element;

let cpt = 0;
let cptBoucle1 = 0;
let cptBoucle2 = 0;

function TriBulles(){


   for (let i = N-1; i > 0; i--){
    cptBoucle1++
    for (let j = 0; j < i; j++) {
        cptBoucle2++;
        if ( T[j+1] < T[j]) {
            element = T[j+1];
            T[j+1] = T[j]
            T[j] = element
            cpt+=3
            console.log(T)
        }


    }