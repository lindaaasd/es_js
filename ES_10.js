
function theIdenticFactor(a, b) {

    if (a === b){
        console.log ("true")
        return  true
        
    } else {
        console.log ("false")
        return  false
        
    }
}

let random1 = Math.floor(Math.random()* (5) + 1);
let random2 = Math.floor(Math.random()* (5) + 1);


theIdenticFactor (random1, random2)





