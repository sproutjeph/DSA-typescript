// Problem 1: Basic Bubble Sort Implementation

// Task: Write a function to implement the Bubble Sort algorithm. The function should take an array of integers and sort it in ascending order.

// Example:

function bubbleSort(arr: number[]): number[] {
  let swapped: boolean;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

// console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); // [11, 12, 22, 25, 34, 64, 90]

// Task: Modify the Bubble Sort algorithm to sort an array of strings in alphabetical order.

// Example:

function bubbleSortStrings(arr: string[]): string[] {
  let swapped: boolean;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

// console.log(bubbleSortStrings(["banana", "apple", "cherry", "date"])); // ["apple", "banana", "cherry", "date"]

// Problem 4: Sorting an Array of Objects

// Task: Write a function to sort an array of objects based on a specific property using Bubble Sort.

// Example:

interface Person {
  name: string;
  age: number;
}

function bubbleSortObjects(arr: Person[], key: keyof Person): Person[] {
  let swapped: boolean;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i][key] > arr[i + 1][key]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

const people: Person[] = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Tom", age: 35 },
];

// console.log(bubbleSortObjects(people, "age")); // [{ name: "Jane", age: 25 }, { name: "John", age: 30 }, { name: "Tom", age: 35 }]

// Problem 5: Counting Swaps in Bubble Sort

// Task: Implement Bubble Sort and count the number of swaps made during the sorting process. Return both the sorted array and the number of swaps.

// Example:

function bubbleSortWithSwaps(arr: number[]): {
  sortedArray: number[];
  swapCount: number;
} {
  let swapCount = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        swapCount++;
      }
    }
  }
  return { sortedArray: arr, swapCount };
}

//console.log(bubbleSortWithSwaps([64, 34, 25, 12, 22, 11, 90])); // { sortedArray: [11, 12, 22, 25, 34, 64, 90], swapCount: 20 }

// Problem 6: Sorting a Large Array

// Task: Test the performance of your Bubble Sort implementation by sorting a large array of random integers. Measure the time taken to sort the array.

function measureBubbleSortPerformance(arr: number[]): number {
  const start = performance.now();
  bubbleSort(arr);
  const end = performance.now();
  return end - start;
}

const largeArray = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 10000)
);
// console.log(
//   `Time taken to sort: ${measureBubbleSortPerformance(largeArray)} ms`
// );
