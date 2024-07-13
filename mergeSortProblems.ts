/* 
Basic Implementation:
 Implement merge sort to sort an array of integers in ascending order.
 */

import { argv } from "bun";

function merge(arr1: number[], arr2: number[]): number[] {
  let sortedArr: number[] = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArr.push(arr1[i]);
      i++;
    } else {
      sortedArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    sortedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    sortedArr.push(arr2[j]);
    j++;
  }

  return sortedArr;
}

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// console.log(mergeSort([1, 66, 78, 9, 0, 2, 33, 44, 11, 555]));

/*
Descending Order:
Modify your merge sort implementation to sort in descending order.
*/

function mergeDescending(arr1: number[], arr2: number[]): number[] {
  let sorted: number[] = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
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

function mergeSortDescending(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  let left = mergeSortDescending(arr.slice(0, mid));
  let right = mergeSortDescending(arr.slice(mid));

  return mergeDescending(left, right);
}

// console.log(mergeSortDescending([1, 66, 78, 9, 0, 2, 33, 44, 11, 555]));

/* 
Problem 3: Merge K Sorted Arrays

Given K sorted arrays, merge them into a single sorted array using merge sort.

Example:
// Input
let arrays = [
  [1, 3, 5],
  [2, 4, 6],
  [0, 9, 10]
];

// Output
// [0, 1, 2, 3, 4, 5, 6, 9, 10]
*/
let arrays = [
  [1, 3, 5],
  [2, 4, 6],
  [0, 9, 10],
];

function mergeK(arr1: number[], arr2: number[]): number[] {
  let sorted: number[] = [];
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

function mergeKSortedArrays(arrays: number[][]): number[] {
  if (arrays.length === 1) return arrays[0];
  let mid = Math.floor(arrays.length / 2);

  let left = arrays.slice(0, mid);
  let right = arrays.slice(mid);

  return mergeK(mergeKSortedArrays(left), mergeKSortedArrays(right));
}

console.log(mergeKSortedArrays(arrays));
