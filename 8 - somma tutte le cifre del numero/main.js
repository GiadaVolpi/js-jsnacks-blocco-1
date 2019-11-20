// Chiedi un numero di 4 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero

var numUtente = parseInt (prompt ("Scrivi un numero di 4 cifre? (Esempio: 1264)"));
console.log ("Questo è il numero inserito dall'utente " + numUtente);


// creo una variabile per ogni cifra che compone il numero inserito dal cliente
var a = numUtente.charAt(0);
var b = numUtente.charAt(1);
var c = numUtente.charAt(2);
var d = numUtente.charAt(3);

totale = a+b+c+d;
console.log (totale)
















/*
// creo una variabile per ogni cifra che compone il numero inserito dal cliente
var a = numUtente.charAt(0);
var b = numUtente.charAt(1);
var c = numUtente.charAt(2);
var d = numUtente.charAt(3);

var totale = a + b + c + d;
console.log (totale);
*/
