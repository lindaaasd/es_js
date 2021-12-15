let awesomeArray = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4];
let coolArray = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5];
let bestArray = [];

// addizione

for (let i= 0; i < awesomeArray.length; i++){
    bestArray.push(awesomeArray[i] + coolArray[i]);
    console.log (bestArray)
}

// sotrazione

for (let i= 0; i < awesomeArray.length; i++){
    bestArray.push(awesomeArray[i] - coolArray[i]);
    console.log (bestArray)
}

// moltiplicazione

for (let i= 0; i < awesomeArray.length; i++){
    bestArray.push(awesomeArray[i] * coolArray[i]);
    console.log (bestArray)
}

// divisione

for (let i= 0; i < awesomeArray.length; i++){
    bestArray.push(awesomeArray[i] / coolArray[i]);
    console.log (bestArray)
}

