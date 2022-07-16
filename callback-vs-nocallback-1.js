
// Function biasa tanpa Callback

let calc1 = function(num1, num2, calcType){
  
  if(calcType === "add"){
    return num1 + num2;
  } else if(calcType === "multiply"){
    return num1 * num2;
  }
  
}

console.log(calc1(2,3,"add"));
console.log(calc1(2,3,"multiply"));

// output:
// 5
// 6

//—---------------------------------------------------------------------
// Function dengan Callback

let add = function(a, b){
  return a + b;
};

let multiply = function(a, b){
  return a * b;
};

let doWhatever = function(a, b){
  return `Here are your numbers: ${a} and ${b}`;
}

let calc2 = function(num1, num2, callback){
  if(typeof callback === "function"){
    return callback(num1, num2);
  } else {
    return `The callback is not a function, it is ${typeof callback}`; 
  } 
}

console.log(calc2(2, 3, add));
console.log(calc2(2, 3, multiply));
console.log(calc2(2, 3, doWhatever));
console.log(calc2(2, 3, function(a, b){return a - b;}));

console.log(calc2(2, 3, [1,2,3]));
console.log(calc2(2, 3, 4));

// output: 
// 5
// 6
// "Here are your numbers: 2 and 3"
// -1
// "The callback is not a function, it is object"
// "The callback is not a function, it is number"




