/*
Dynamic Programming
"A method for solving a complex problem by breaking it down into a collection of simpler subProblems, solving each of those subProblems just once, and storing their solutions."


*/

function fib(n: number): number {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(3));
