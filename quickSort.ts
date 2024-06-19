// Quick Sort
// Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
// • Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
// • Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

// How it works Eg. [5, 2, 1, 8, 4, 7, 6, 3]
// select a pivot lets 5 then move all the element that is less than 5 to the left and all the elements greater than 5 to the right, then you recursivly repeat the process

// first part Pivot Helper

// Pivot Pseudocode
// • write a function that accepts three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
// • Grab the pivot from the start of the array
// • Store the current pivot index in a variable (this will keep track of where the pivot should end up) .
// • Loop through the array from the start until the end
// • If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
// • Swap the starting element(i.e.the pivot) with the pivot index.
// return the pivot index

function pivotHelper(
  arr: number[],
  start: number = 0,
  end: number = arr.length - 1
): number {
  function swap(array: number[], i: number, j: number): void {
    [array[i], array[j]] = [array[j], array[i]];
  }

  let pivot = arr[start];
  let pivotIndex = start;

  // Loop through the array from the start until the end
  for (let i = start + 1; i <= end; i++) {
    // If the pivot is greater than the current element
    if (pivot > arr[i]) {
      pivotIndex++;
      // Swap the current element with the element at the pivot index
      swap(arr, pivotIndex, i);
    }
  }
  // Swap the starting element (i.e. the pivot) with the pivot index
  swap(arr, start, pivotIndex);

  return pivotIndex;
}

console.log(pivotHelper([4, 6, 1, 7, 3, 2, 5])); // Output: 3

// Quick Sort Pseudocode
// Define the Quick Sort function:

// Accepts an array, a start index, and an end index (defaulting to 0 and the array length minus 1, respectively).
// Base Case:

// If the start index is greater than or equal to the end index, return (do nothing).
// Partition the Array:

// Call the pivotHelper function to partition the array around a pivot element.
// The pivotHelper should return the pivot index.
// Recursive Calls:

// Recursively apply Quick Sort to the sub-array to the left of the pivot.
// Recursively apply Quick Sort to the sub-array to the right of the pivot.

function quickSort(
  arr: number[],
  start: number = 0,
  end: number = arr.length - 1
): number[] | undefined {
  // Base case: if the start index is greater than or equal to the end index, return
  if (start >= end) return;

  // Partition the array and get the pivot index
  const pivotIndex = pivotHelper(arr, start, end);

  // Recursively apply Quick Sort to the sub-array to the left of the pivot
  quickSort(arr, start, pivotIndex - 1);
  // Recursively apply Quick Sort to the sub-array to the right of the pivot
  quickSort(arr, pivotIndex + 1, end);

  return arr;
}

// Example usage:
console.log(quickSort([4, 6, 1, 7, 3, 2, 5])); // Output: [1, 2, 3, 4, 5, 6, 7]

// BIG O of QUICKSORT
// Average Case: O(n log n)
// Best Case: O(n log n)
// Worst Case: O(n²)
// Space Complexity: O(log n)
