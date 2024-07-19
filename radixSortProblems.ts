/*
Problem 1: Basic Integer Sorting
Sort an array of positive integers using radix sort.
Input: [170, 45, 75, 90, 802, 24, 2, 66]
Expected Output: [2, 24, 45, 66, 75, 90, 170, 802]
*/

function countingSortByDigit(
  arr: number[],
  exp: number,
  base: number = 10
): void {
  let n = arr.length;
  let output = new Array(n).fill(0);
  let count = new Array(base).fill(0);

  for (let i = 0; i < n; i++) {
    const digit = Math.floor(arr[i] / exp) % base;
    count[digit]++;
  }

  for (let i = 1; i < base; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % base;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

function radixSort(arr: number[], base: number = 10): number[] {
  if (arr.length <= 1) return arr;
  let max = Math.max(...arr);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= base) {
    countingSortByDigit(arr, exp, base);
  }

  return arr;
}

/**
 * 
 Problem 2: Sorting with Zero
Sort an array of non-negative integers, including zero.
Input: [53, 89, 150, 36, 633, 233, 0, 12]
Expected Output: [0, 12, 36, 53, 89, 150, 233, 633]
 */

function countingSortByDigit2(
  arr: number[],
  exp: number,
  base: number = 10
): void {
  let n = arr.length;
  let output = new Array(n).fill(0);
  let count = new Array(base).fill(0);

  for (let i = 0; i < n; i++) {
    const digit = Math.floor(arr[i] / exp) % base;
    count[digit]++;
  }

  for (let i = 1; i < base; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % base;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

function radixSort2(arr: number[], base: number = 10): number[] {
  if (arr.length <= 1) return arr;
  let max = Math.max(...arr);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= base) {
    countingSortByDigit2(arr, exp);
  }
  return arr;
}

/*
Problem 3: Handling Duplicates
Sort an array of positive integers that includes duplicate values.
Input: [18, 5, 100, 3, 1, 19, 6, 0, 7, 4, 2, 5]
Expected Output: [0, 1, 2, 3, 4, 5, 5, 6, 7, 18, 19, 100]
*/

function countingSortByDigit3(
  arr: number[],
  exp: number,
  base: number = 10
): void {
  let n = arr.length;
  let output: number[] = new Array(n).fill(0);
  let count: number[] = new Array(base).fill(0);

  for (let i = 0; i < n; i++) {
    const digit = Math.floor(arr[i] / exp) % base;
    count[digit]++;
  }

  for (let i = 1; i < base; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % base;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

function radixSort3(arr: number[], base: number = 10): number[] {
  if (arr.length <= 1) return arr;
  let max = Math.max(...arr);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= base) {
    countingSortByDigit3(arr, exp);
  }
  return arr;
}

/*
Problem 4: Negative Numbers
Sort an array that includes both positive and negative integers.
Input: [-1, 2, -3, 4, -5, 6, -7, 8, -9, 0]
Expected Output: [-9, -7, -5, -3, -1, 0, 2, 4, 6, 8]
*/

function countingSort4(arr: number[], exp: number, base: number = 10): void {
  let n = arr.length;
  let output = new Array(n).fill(0);
  let count = new Array(base).fill(0);

  for (let i = 0; i < n; i++) {
    const digit = Math.floor(Math.abs(arr[i] / exp)) % base;
    count[digit]++;
  }

  for (let i = 1; i < base; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(Math.abs(arr[i] / exp)) % base;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

function radixSort4(arr: number[], base: number = 10): number[] {
  if (arr.length <= 1) return arr;

  let max = Math.max(...arr);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= base) {
    countingSort4(arr, exp);
  }
  const negative = arr.filter((x) => x < 0).reverse();
  const positive = arr.filter((x) => x >= 0);

  return [...negative, ...positive];
}
console.log(radixSort4([-1, 2, -3, 4, -5, 6, -7, 8, -9, 0]));

function countSortByDigit(arr: number[], exp: number, base: number = 10): void {
  let n = arr.length;
  let output = new Array(n).fill(0);
  let count = new Array(base).fill(0);

  for (let i = 0; i < n; i++) {
    const digit = Math.floor(arr[i] / exp) % base;
    count[digit]++;
  }

  for (let i = 1; i < base; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % base;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

function radixSort5(arr: number[], base: number = 10): number[] {
  if (arr.length <= 1) return arr;
  let max = Math.max(...arr);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= base) {
    countSortByDigit(arr, exp);
  }
  return arr;
}

console.log(radixSort5([12, 44, 8888, 9, 0]));
