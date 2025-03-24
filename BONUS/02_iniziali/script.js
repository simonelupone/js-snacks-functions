/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
// function getInitials(array) {
//     let initials = [];
//     for (i = 0; i < array.length; i++) {
//         initials.push(array[i][0]);
//     }
//     return initials;
// }

const initials = (array) => array.map((el) => el[0]);

// Invoca la funzione qui e stampa il risultato in console
console.log(initials(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]