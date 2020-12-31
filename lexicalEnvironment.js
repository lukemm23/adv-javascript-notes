//  LEXICAL ENVIRONMENT

//  NOTE:
//  1. the environment in which code belongs to.
//  2. a global primitive variable or data structure or function belongs to the global environment
//  3. a variable,structure or function inside a function belongs to the environment of that function.
//  4. likewise for inside a object.

function printName(name) {
  console.log('print name running');
  return console.log(name);
}

function findName(name) {
  console.log('find name running');
  return printName(name);
}

function sayMyName(name) {
  console.log('say my name running');
  return findName(name);
}

sayMyName('Luke');
