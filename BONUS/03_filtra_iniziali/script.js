/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
// function filterWordsByInitial(array, letter) {
//     let filteredArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i][0].toLowerCase() === letter.toLowerCase()) {
//             filteredArray.push(array[i]);
//         }
//     }
//     return filteredArray;
// }

let filteredArray = (array, letter) => array.filter((el) => el[0].toLowerCase() === letter.toLowerCase());

// Invoca la funzione qui e stampa il risultato in console
console.log(filteredArray(names, 'a'));
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]