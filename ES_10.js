
function theIdenticFactor() {

    let result1 = 0;
    let result2 = 0;

    for (i=0; i<= 3; i++){
        let random1 = Math.floor(Math.random()+ (5 - 1) + 1);
        let random2 = Math.floor(Math.random()+ (5 - 1) + 1);
        result1 = result1 + random1;
        result2 = result2 + random2;
         }

    if (result1 == result2){
        console.log ("true")
        return  "true"
        
    } else {
        console.log ("false")
        return  "false"
        
    }

}

theIdenticFactor ()




