// Consegna: stampa le potenze di 2 fino a 1000.


// SOLUZIONE 1
console.log ("Soluzione 1");
var potenza = 1;

while (potenza < 1000) {
    console.log (potenza);
    potenza = potenza * 2;
}


// SOLUZIONE 2
console.log ("Soluzione 2");
var i = 1
while ((i < 1000) && (i * 2 < 1000)) {
  potenza = i * 2;
  console.log(potenza);
  i = potenza;
}
