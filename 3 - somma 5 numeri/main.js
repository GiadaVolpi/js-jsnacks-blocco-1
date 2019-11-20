// SOLUZIONE CON CICLO FOR
console.log ("Eseguo l'esercizio con CICLO FOR")
var numeriUtente = [];
for (var i = 0; i < 5; i++) {
    var numero = parseInt (prompt ("Inserisci un numero"));
    numeriUtente.push (numero);
}
console.log (numeriUtente);
// calcolo la somma di tutti i numeriUtente
var somma = 0;
for (var i = 0; i < numeriUtente.length; i++) {
    somma = somma + numeriUtente[i];
}
console.log ("La somma dei numeri inseriti è " + somma);




// SOLUZIONE CON CICLO WHILE
console.log ("Eseguo l'esercizio con CICLO WHILE");
var contatore = 0;
var somma = 0;
while (contatore < numeriUtente.length) {
    somma = somma + numeriUtente [contatore];
    contatore++;
}

console.log ("La somma dei numeri inseriti è " + somma);
