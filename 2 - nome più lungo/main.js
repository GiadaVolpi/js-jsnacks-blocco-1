// chiedo una parola all'utente
var parola1 = prompt ("Scrivi una parola");
console.log (parola1);


// chiedo un altra parola all'utente
var  parola2 = prompt ("Scrivi un'altra parola");
console.log (parola2);


if (parola1.length == parola2.length) {
    console.log ("Le due parole sono lunghe uguale");
} else if (parola1.length > parola2.length) {
    console.log ("La parola più lunga è " + parola1);
    console.log ("La parola più corta è " + parola2);
} else if (parola1.length < parola2.length) {
    console.log ("La parola più lunga è " + parola2);
    console.log ("La parola più corta è " + parola1);
}
