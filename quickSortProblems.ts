/*
Problem 1: Basic Quick Sort Implementation

Write a TypeScript function to implement the Quick Sort algorithm. The function should sort an array of integers in ascending order. Test your function with various input arrays, including:

	•	An already sorted array
	•	A reverse sorted array
	•	An array with duplicate elements
	•	An array with a single element
	•	An empty array
*/

function quickSortAlgorithm(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  let left: number[] = [];
  let mid: number[] = [];
  let right: number[] = [];

  let pivot = arr[Math.floor(arr.length / 2)];

  for (const elem of arr) {
    if (elem < pivot) {
      left.push(elem);
    } else if (elem > pivot) {
      right.push(elem);
    } else {
      mid.push(elem);
    }
  }

  return [...quickSortAlgorithm(left), ...mid, ...quickSortAlgorithm(right)];
}

function swap(arr: number[], idx1: number, idx2: number) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function partition(
  arr: number[],
  start: number = 0,
  end: number = arr.length - 1
): number {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSortAlgorithm1(
  arr: number[],
  start: number = 0,
  end: number = arr.length - 1
): number[] {
  if (start < end) {
    const pi = partition(arr, start, end);
    quickSortAlgorithm1(arr, start, pi - 1);
    quickSortAlgorithm1(arr, pi + 1, end);
  }

  return arr;
}

console.log(quickSortAlgorithm1([-4, 10, 7, 4, 5, 2, 6, 80, 0]));
