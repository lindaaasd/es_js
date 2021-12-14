let V = prompt("inserisci numero del voto")

if (V < 18) {
    console.log ("insufficiente")
}

if (V >= 18 && V < 21) {
    console.log ("sufficiente")
}

if (V >=21 && V < 24){
    console.log ("buono")
}

if (V >=24 && V < 27){
    console.log ("distinto")
}

if (V >=27 && V < 29){
    console.log ("ottimo")
}

if (V == 30){
    console.log ("eccelente")
}


