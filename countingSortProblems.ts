/*
Example Problem 1: Basic Sorting

Problem: Given an array of non-negative integers, sort it using Counting Sort.

Input: [5, 3, 8, 6, 2, 7, 4, 1]

Output: [1, 2, 3, 4, 5, 6, 7, 8]


*/

function countingSort1(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const max = Math.max(...arr);
  const counter = new Array(max + 1).fill(0);

  for (const val of arr) {
    counter[val]++;
  }

  for (let i = 1; i <= max; i++) {
    counter[i] += counter[i - 1];
  }

  const output = new Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    output[counter[arr[i]] - 1] = arr[i];
    counter[arr[i]]--;
  }

  return output;
}

/*
Example Problem 2: Sorting with Duplicates

Problem: Given an array of non-negative integers that contains duplicates, sort it using Counting Sort.

Input: [4, 2, 2, 8, 3, 3, 1, 3, 4]

Output: [1, 2, 2, 3, 3, 3, 4, 4, 8]

*/

function countingSort2(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const max = Math.max(...arr);
  const counter = new Array(max + 1).fill(0);

  for (const val of arr) {
    counter[val]++;
  }

  for (let i = 1; i <= max; i++) {
    counter[i] += counter[i - 1];
  }
  const output = new Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    output[counter[arr[i]] - 1] = arr[i];
    counter[arr[i]]--;
  }
  return output;
}

/*
Example Problem 3: Sorting a Range of Values

Problem: Given an array of integers within a specific range (e.g., 0 to 50), sort it using Counting Sort.

Input: [10, 20, 15, 30, 25, 50, 40, 35, 45, 5, 0]

Output: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

*/

function countingSort3(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const max = Math.max(...arr);
  const counter = new Array(max + 1).fill(0);

  for (const val of arr) {
    counter[val]++;
  }

  for (let i = 1; i <= max; i++) {
    counter[i] += counter[i - 1];
  }

  const output = new Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    output[counter[arr[i]] - 1] = arr[i];
    counter[arr[i]]--;
  }

  return output;
}

console.log(countingSort3([10, 20, 15, 30, 25, 50, 40, 35, 45, 5, 0]));

/*
Problem: Given an array representing the scores of students in a class (ranging from 0 to 100), sort it using Counting Sort.

Input: [95, 85, 90, 100, 70, 85, 90, 80]

Output: [70, 80, 85, 85, 90, 90, 95, 100]

*/

function countingSort4(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const max = Math.max(...arr);
  const counter = new Array(max + 1).fill(0);
  for (const val of arr) {
    counter[val]++;
  }

  for (let i = 1; i <= max; i++) {
    counter[i] += counter[i - 1];
  }

  const output = new Array(arr.length);

  for (let i = arr.length - 1; i >= 0; i--) {
    output[counter[arr[i]] - 1] = arr[i];
    counter[arr[i]]--;
  }
  return output;
}

/*
Problem: Given an array of integers where the range of values is large but the actual number of elements is small, sort it using Counting Sort.

Input: [1000, 2000, 1000, 3000, 2500, 2000, 1500]

Output: [1000, 1000, 1500, 2000, 2000, 2500, 3000]

*/

function countingSortWithRang(
  arr: number[],
  start: number,
  end: number
): number[] {
  if (arr.length <= 1) return arr;
  const counter = new Array(end + 1).fill(0);

  for (let val of arr) {
    counter[val]++;
  }

  for (let i = 1; i <= end; i++) {
    counter[i] += counter[i - 1];
  }

  const output = new Array(arr.length);

  for (let i = arr.length - 1; i >= 0; i--) {
    output[counter[arr[i]] - 1] = arr[i];
    counter[arr[i]]--;
  }
  return output;
}

console.log(
  countingSortWithRang([1000, 2000, 1000, 3000, 2500, 2000, 1500], 1000, 3000)
);
