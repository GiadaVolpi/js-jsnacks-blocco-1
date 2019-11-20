// array elenco invitati
var invitati = ["Charlie Chaplin", "James Stewart", "Gary Cooper", "Mary Pickford"];
console.log (invitati);

// chiedo all'utente di inserire il suo nome
var nome = prompt ("Vediamo se sei tra gli invitati. Scrivi il tuo nome");
console.log (nome);

// variabile per verificare che l'utente sia o no presente tra gli invitati
var nomeInLista = false;

var nomeInLista = invitati.includes(nome);

if(nomeInLista == true) {
    console.log('Puoi entrare!');
} else {
    console.log('Non sei in lista');
}
