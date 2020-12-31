// EXECUTION CONTEXT

// NOTE:
//  1. call stack recognized call to run sayMyName(), then runs it in global execution context.
//  2. then runs findName() in a inner layer (function execution context). and so on.
//  3. then when all inner contexts complete, the final global context completes its task.
//  4. global context also consist of global object and THIS keyword.
//  5. global (browser: window)(node: global) === THIS   // true

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
