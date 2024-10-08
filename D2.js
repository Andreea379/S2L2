/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/


const numero = 12;
const numero1 = 15;

if (numero>numero1){
    console.log(numero);
}else{
    console.log(numero1);
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
numeroIntero = 2;
if(numeroIntero !== 5){
    console.log("not equal");
}
    

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

numeroDivisibile = 15;
if(numeroDivisibile % 5 === 0){
    console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const Numero = 6;
const Numero1 = 2;
console.log((Numero === 8 || Numero1 === 8) || (Numero + Numero1 === 8));

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = 55;

if(totalShoppingCart > 50){
    console.log("La spedizione è gratuita")
}else{
    console.log("La spedizione costa 10, quindi", totalShoppingCart+10);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

if( (totalShoppingCart*0.8) > 50){
    console.log("La spedizione è gratuita")
}else{
    console.log("La spedizione costa 10, quindi", (totalShoppingCart*0.8)+10);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let a = 7;
let b = 9;
let c = 56;
let max;
let mid;
let min;

if(a > b && a > c){
    max = a;
    if(b > c){
        mid = b;
        min = c;
    }else{
        mid = c;
        min = b;
    }
}else if(b > a && b > c){
    max = b;
    if(a > c){
        mid = a;
        min = c;
    }else{
        mid = c;
        min = a;
    }
}else if(c > b && c > a){
    max = c;
    if(a > b){
        mid = a;
        min = b;
    }else{
        mid = b;
        min = a;
    }
}
console.log(max, mid, min);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const number = 13; 
if(typeof number === 'number'){
    console.log("Es 8:", "Questo valore è un numero");
} else{
    console.log("Es 8:", "Questo valore non è un numero");
}



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const num = 8;

if(num % 2 === 0){
    console.log("Il numero è pari")
}else{
    console.log("Il numero è dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
*/
  let val = 8
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city="Toronto";
console.log(me.city);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

let lastName;
delete(me.lastName);
console.log(lastName);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

numbers = [];
numbers.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(numbers);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.*/

numbers.splice(9, 1, 40);
console.log(numbers);
