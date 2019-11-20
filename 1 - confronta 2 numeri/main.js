// chiedo un numero all'utente
var numero1 = parseInt (prompt ("Scrivi un numero intero"));
console.log (numero1);


// chiedo un altro numero all'utente
var numero2 = parseInt (prompt ("Scrivi un altro numero intero"));
console.log (numero2);


// PRIMA SOLUZIONE
console.log ("prima soluzione")
if (numero1 < numero2) {
    console.log ("Il numero maggiore è " + numero2);
} else if (numero2 < numero1) {
    console.log ("Il numero maggiore è " + numero1);
} else if (numero1 == numero2) {
    console.log ("I numeri si equivalgono");
}


// SECONDA SOLUZIONE
// utilizzo la funzione Math.max per confrontare i due numeri e prendere il maggiore
console.log ("seconda soluzione")
var a = Math.max (numero1, numero2);
if (numero1 == numero2) {
    console.log ("I numeri si equivalgono");
} else {
    console.log ("Il numero maggiore è "+ a);
}


// TERZA SOLUZIONE
// utilizzo array
console.log ("terza soluzione")
if (numero1 == numero2) {
    console.log ("I numeri si equivalgono");
} else {
    var lista = [numero1, numero2];
    console.log (lista);
    lista.sort (function(a,b) {return b-a});
    console.log (lista);
    console.log ("Il numero maggiore è " + lista [0]);
}
