// Problem 1: Basic Selection Sort Implementation

// Task: Write a function to implement the Selection Sort algorithm. The function should take an array of integers and sort it in ascending order.

function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}

// console.log(selectionSort([64, 25, 12, 22, 11])); // [11, 12, 22, 25, 64]

// Problem 2: Sort in Descending Order

// Problem: Modify the Selection Sort algorithm to sort an array of integers in descending order.

// Input: An array of integers, e.g., [64, 25, 12, 22, 11]

// Output: The sorted array in descending order, e.g., [64, 25, 22, 12, 11]

function selectionSortDescending(arr: number[]): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      // descending >  ascending <
      if (arr[j] > arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}

// Problem 6: Sorting a Partially Sorted Array

// Task: Write a function that uses Selection Sort to sort an array where only the first half of the array is unsorted, and the second half is already sorted in ascending order.

function selectionSortPartial(arr: number[]): number[] {
  let mid = Math.floor(arr.length / 2);
  for (let i = 0; i < mid; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSortPartial([25, 12, 22, 64, 11, 30, 40, 50, 60, 70])); // [11, 12, 22, 25, 30, 40, 50, 60, 64, 70]
