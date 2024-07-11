// **************** RECURSION **************************

// What is recursion?
// A process (a function in our case) that calls itself

// Example of recursive function
// JSON.parse / JSON.stringify
// • document.getElementById and DOM traversal
// algorithms
// • Object traversal

/* 
How recursive functions work
Invoke the same function with a different input until you reach your base case!

Base Case
The condition when the recursion ends.
This is the most important concept to understand

Two essential parts of a recursive function!
• Base Case
• Different Input
The function must be called with different inputs
*/

// Example
function countDown(num: number) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// countDown(5);

// Example 2
function sumRange(num: number): number {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// console.log(sumRange(3));

// Example 3
function factorial(num: number): number {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5));

// Example 3 collect odds value recursivly with helper function
function collectOdds(arr: number[]): number[] {
  let result: number[] = [];

  function helper(arr: number[]) {
    if (arr.length === 0) return;
    if (arr[0] % 2 !== 0) {
      result.push(arr[0]);
    }
    helper(arr.slice(1));
  }

  helper(arr);

  return result;
}

console.log(collectOdds1([1, 2, 3, 4, 5]));

// Example 3 collect odds value with pure recursion
function collectOdds1(arr: number[]): number[] {
  let newArray: number[] = [];
  if (arr.length === 0) {
    return newArray;
  }
  if (arr[0] % 2 !== 0) {
    newArray.push(arr[0]);
  }

  newArray = newArray.concat(collectOdds1(arr.slice(1)));

  return newArray;
}

/*
Pure Recursion Tips
• For arrays, use methods like slice, the spread operator, and concat that For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
• Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
• To make copies of objects use Object.assign, or the spread operator
*/
