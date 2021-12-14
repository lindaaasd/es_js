
let mythrow = prompt("Quante volte girare il dado?")
let T1 = 0;
let T2 = 0;

for ( let i= 0; i < mythrow; i++ ) {
    dice = Math.floor(Math.random() * 6 + 1);
    dice2 = Math.floor(Math.random() * 6 + 1);
    T1 = T1 + dice;
    T2 = T2 + dice2;
    console.log ("Il primo tipo ha lanciato il dado " + dice + " per il totale di " + T1);
    console.log ("Il secondo tipo ha lanciato il dado " + dice2 + " per il totale di " + T2)
}


if (T1 > T2) {
    console.log ("Ha vinto il primo tipo")
}

if (T1 < T2) {
   console.log ( "Ha vinto il secondo tipo" )
}

if (T1 == T2) {
    console.log ("Non ha vinto nessuno mehhhhh")
}
