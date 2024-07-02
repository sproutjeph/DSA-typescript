//**********Intermediate Sorting Algorithms*******

/*
Merge Sort
• It's a combination of two things - merging and sorting!
• Exploits the fact that arrays of 0 or 1 element are always sorted
• Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

 Merge Sort is a divide-and-conquer algorithm that splits the array into smaller sub-arrays, sorts those sub-arrays, and then merges them back together to form the sorted array. Here’s how the algorithm works step-by-step, along with a TypeScript implementation:

Steps of Merge Sort:

	1.	Divide: Split the array into two halves.
	2.	Conquer: Recursively sort each half.
	3.	Combine: Merge the two sorted halves back together.

TypeScript Implementation:

	1.	Merge Function: A helper function that merges two sorted arrays.
	2.	Merge Sort Function: A recursive function that splits the array and uses the merge function to sort and combine.

 Big O of merge sort is O(n log n), space O(n)

*/

// Merging Sorted Arrays
// • In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
// • Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
// • This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

/* 
Merging Arrays Pseudocode
• Create an empty array, take a look at the smallest values in each input array
• While there are still values we haven't looked at...
• If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
• If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
• Once we exhaust one array, push in all remaining values from the other array
*/

function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  let sortedArray: number[] = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArray.push(arr1[i]);
      i++;
    } else {
      sortedArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    sortedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    sortedArray.push(arr2[j]);
    j++;
  }

  return sortedArray;
}

// console.log(mergeSortedArrays([1, 2, 3, 4], [5, 6, 7, 8, 9]));

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return mergeSortedArrays(left, right);
}

// console.log(mergeSort([2, 4, 1, 6, 9, 0, 3]));

//********QUICK SORT*************** */
/* 
Quick Sort is a popular sorting algorithm that uses the divide-and-conquer strategy to sort elements. It is efficient with an average-case time complexity of O(n log n) and a worst-case time complexity of O(n^2). However, with good pivot selection, the worst case can be avoided, making Quick Sort very fast in practice.

Quick Sort Algorithm

	1.	Choose a Pivot: Select an element from the array as the pivot. This can be any element, but common strategies include choosing the first element, the last element, or a random element.
	2.	Partition: Rearrange the elements in the array so that all elements less than the pivot are to its left, and all elements greater than the pivot are to its right.
	3.	Recursively Sort: Apply the same process to the sub-arrays to the left and right of the pivot.

Steps in TypeScript

	1.	Partition Function: This function rearranges the elements around the pivot.
	2.	Quick Sort Function: This function recursively sorts the sub-arrays.

 BIG O OF QUICKSORT
 time (Best) O(n log n)
 time (Average) O(n log n)
 time (Worst) O(n^2)
 space O(log n)
*/

function partition(
  arr: number[],
  start: number = 0,
  end: number = arr.length - 1
): number {
  function swap(arr: number[], idx1: number, idx2: number) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr: number[], start = 0, end = arr.length - 1): number[] {
  if (start < end) {
    const pivotIdx = partition(arr, start, end);
    quickSort(arr, start, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, end);
  }

  return arr;
}

// console.log(partition([100, -1, 5, 2, 3, 66, 10, 7, 4, 2, 6, 8]));
// console.log(quickSort([-4, 10, 7, 4, 5, 2, 6, 80, 0]));

function plusOne(digits: number[]): number[] {
  const n = digits.length;
  // Start from the least significant digit
  for (let i = n - 1; i >= 0; i--) {
    // If the digit is less than 9, we can simply increment it and return
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    // If the digit is 9, set it to 0 and continue to the next digit
    digits[i] = 0;
  }

  // If we're here, it means all digits were 9
  // We need a new array with an additional digit
  // const newNumber = new Array(n + 1).fill(0);
  const newNumber = Array.from({ length: n + 1 }, () => 0);
  newNumber[0] = 1;
  return newNumber;
}

console.log(plusOne([1, 2, 9]));
// [1,2,3,4]
