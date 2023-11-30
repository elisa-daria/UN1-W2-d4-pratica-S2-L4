/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  const result = l1 * l2;
  return result;
};
console.log("superficie del rettangolo", area(50, 30));
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (num1, num2) {
  if (num1 === num2) {
    let sum = num1 + num2;
    let multiply3 = sum * 3;
    return multiply3;
  }
  const result = num1 + num2;
  return result;
};
console.log("crazySum if)", crazySum(50, 50));
console.log("crazySum w/if)", crazySum(32, 43));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (num1) {
  let absoluteDifference = Math.abs(num1 - 19);
  if (num1 > 19) {
    return absoluteDifference * 3;
  }
  return absoluteDifference;
};
console.log("crazyDiff if)", crazyDiff(20));
console.log("crazyDiff w/if)", crazyDiff(5));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if (n === 400 || (n >= 20 && n <= 100)) {
    return true;
  } else {
    return false;
  }
};
console.log(boundary(400));
console.log(boundary(50));
console.log(boundary(19));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (string) {
  if (string.startsWith("EPICODE")) {
    return string;
  } else {
    return "EPICODE" + string;
  }
};
console.log("else", epify(" ti saluta"));
console.log("if", epify("EPICODE CIAO!"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (n) {
  if (n <= 0) {
    return false;
  }
  if (n % 3 === 0 || n % 7 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log("21 è un multiplo di 3 o di 7:", check3and7(21));
console.log("22  è un multiplo di 3 o di 7:", check3and7(22));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (string) {
  return string.split("").reverse().join("");
};
console.log(reverseString("EPICODE"));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (string) {};

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (string) {
  let newstr = string.slice(1, string.length - 1);
  return newstr;
};
console.log(cutString("Ciao mi chiamo Elisa Daria"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
