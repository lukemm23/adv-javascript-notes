// HOISTING

// NOTES:
// 1. JS engine will read the whole file, and then come back and collect asignment
// 2. therefore hoisting exist when a function is called before expressed.
// 3. to combat global variables not being hoisted, JS files usually use structure like below
//
//  ******** imports
//  ******** global variables (1)
//  ******** functions blocks (1)
//  ******** global variables (2)
//  ******** functions blocks (2)

console.log(sing()); // this will run properly because of hoisting

// console.log(teddy);
// this will not run properly because hoisting only works for functions

// console.log(sing2());
// this will not run properly because hoisting only works for functions

let teddy = 'bear';

let sing2 = function () {
  console.log('ohhhh la la la');
};

function sing() {
  console.log('ohhhh la la la');
}

// this version of function sing will run since its the last assignment of function called sing.
function sing() {
  console.log('ohhhh la la la la');
}

console.log(sing()); // this will run properly because of hoisting
console.log(teddy);
