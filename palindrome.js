// Initialize two arrays with the given strings
let var1 = ['RACECAR'];
let var2 = ['RECORDER'];

// Reverse the arrays
let reverseVar1 = var1.reverse();
console.log("This is the original: ", var1); 
console.log("This is the reversed: ", reverseVar1); 

let reverseVar2 = var2.reverse();
console.log("This is the original: ", var2); 
console.log("This is the reversed: ", reverseVar2); 

// Compare the original arrays to the reversed arrays
let result1 = var1 == reverseVar1;
console.log("The result is: ", result1); 
let result2 = var2 == reverseVar2;
console.log("The result is: ", result2);