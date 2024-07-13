// Merge Sort is a popular and efficient sorting algorithm that uses the divide-and-conquer strategy. It works by dividing the array into smaller subArrays, sorting
// those subArrays, and then merging them back together in sorted order. Merge Sort has a time complexity of 𝑂(𝑛 log 𝑛), making it one of the most efficient
// general-purpose sorting algorithms.

// Merge Sort Algorithm Steps
// Divide: Split the array into two halves.
// Conquer: Recursively sort each half.
// Combine: Merge the two sorted halves into a single sorted array.
// Detailed Steps
// Base Case: If the array has one or zero elements, it is already sorted, so return it.
// Splitting: Find the middle of the array and divide it into two halves.
// Recursive Sorting: Recursively apply Merge Sort to each half.
// Merging: Merge the two sorted halves back into a single sorted array.
// Merging Two Sorted Arrays
// To merge two sorted arrays, compare the elements of both arrays one by one and copy the smaller element into a result array.
// Repeat this process until all elements from both arrays have been copied.

function merge(arr1: number[], arr2: number[]): number[] {
  let sorted = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sorted.push(arr1[i]);
      i++;
    } else {
      sorted.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    sorted.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    sorted.push(arr2[j]);
    j++;
  }

  return sorted;
}

console.log(mergeSort([22, 1, 2, 33, 3, 4, 5, 44, 6]));

function mergeSort(arr: number[]) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left: number[] = mergeSort(arr.slice(0, mid));
  let right: number[] = mergeSort(arr.slice(mid));

  return merge(left, right);
}
