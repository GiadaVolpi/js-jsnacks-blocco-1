// esempio: chiedo un numero all'utente
// l'utente inserisce 5
// devo stampare il cubo dei primi 5 numeri
// 1 alla 3a = 1
// 2 alla 3a = 8
// 3 alla 3a = 27
// 4 alla 3a = 64
// 5 alla 3a = 125

var numUtente = prompt("Inserisci un numero");
var cubo = i * i * i;

for (var i = 1; i <= numUtente; i++) {
    var cubo = i * i * i;
    console.log ("Il il cubo di " + i + " è: " + cubo);
}
