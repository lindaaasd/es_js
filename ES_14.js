let awesomeArray = [3, 5, 10, 2, 8];
awesomeArray.sort(compare)
console.log (...awesomeArray)


function compare(a, b) {
    if (a < b ) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  console.log(" The lowest values of the array are " + awesomeArray[0] + ", " + awesomeArray[1] + ", " + awesomeArray[2]);
  console.log(" The highest values of the array are " + awesomeArray[4] + ", " + awesomeArray[3] + ", " + awesomeArray[2]);


let sum = 0;

for (i= 0; i< awesomeArray.length; i++){
    sum = sum + awesomeArray[i];
}

media = sum / awesomeArray.length;
console.log (media);



//   let mini =  Number.MAX_VALUE;

//   for (i= 0; i < awesomeArray.length; i++){
//       if (awesomeArray[i] < mini ){ 
//           mini = awesomeArray[i];
//       }
//   }

//   awesomeArray.shift();
//   let mini2 = Number.MAX_VALUE;

//   for (i= 0; i < awesomeArray.length; i++){
//     if (awesomeArray[i] < mini2 ){ 
//         mini2 = awesomeArray[i];
//     }
// }
//   awesomeArray.shift();
//   let mini3 = Number.MAX_VALUE;

// for (i= 0; i < awesomeArray.length; i++){
//   if (awesomeArray[i] < mini3 ){ 
//       mini3 = awesomeArray[i];
//   }
// }

//   console.log (" The lowest values of the array are " + mini + ", " + mini2 + ", " + mini3)
//   console.log (" The highest values of the array are " + awesomeArray)

 