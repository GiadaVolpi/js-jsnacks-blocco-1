//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

var dispari = [];

for (var i = 0; i < 6; i++) {
    var numUtente = parseInt (prompt ("Inserisci un numero"));
    if (numUtente % 2 !== 0) {
        dispari.push (numUtente);
    }
}

console.log ("Questi sono i numeri dispari che hai inserito " + dispari);
