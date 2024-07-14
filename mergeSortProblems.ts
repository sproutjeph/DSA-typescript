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

  sortedArr.push(...arr1.slice(i));
  sortedArr.push(...arr2.slice(j));

  // while (i < arr1.length) {
  //   sortedArr.push(arr1[i]);
  //   i++;
  // }
  // while (j < arr2.length) {
  //   sortedArr.push(arr2[j]);
  //   j++;
  // }

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

function mergeSortKArrays(arrays: number[][]): number[] {
  if (arrays.length === 1) return arrays[0];
  let mid = Math.floor(arrays.length / 2);

  let left = arrays.slice(0, mid);
  let right = arrays.slice(mid);

  return mergeK(mergeSortKArrays(left), mergeSortKArrays(right));
}

// console.log(mergeSortKArrays(arrays));

/*
Counting Inversions

In an array, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j. Given an array, find the number of inversions in the array using merge sort.

Example:
// Input
let arr = [2, 4, 1, 3, 5];

// Output
// 3 (The inversions are (2, 1), (4, 1), and (4, 3))


The problem of "Counting Inversions" is about finding pairs of elements in an array that are "out of order" relative to each other. Let's break it down:

What is an inversion?
An inversion is a pair of elements (a[i], a[j]) in an array where:

i < j (the first element comes earlier in the array)
a[i] > a[j] (but the first element is larger than the second)


The goal:
Count how many such pairs exist in the given array.
Why it matters:
Inversions can be a measure of how "unsorted" an array is. The more inversions, the further the array is from being sorted.

Let's look at the example:
CopyArr = [2, 4, 1, 3, 5]
The inversions in this array are:

(2, 1): 2 comes before 1, but 2 > 1
(4, 1): 4 comes before 1, but 4 > 1
(4, 3): 4 comes before 3, but 4 > 3

So, there are 3 inversions in total.
To visualize it another way, think of each inversion as a pair of elements that would need to be swapped to make the array more sorted. In this case:

Swapping 2 and 1
Then swapping 4 and 1
Then swapping 4 and 3


*/

function mergeAndCount(arr1: number[], arr2: number[]): [number[], number] {
  let invCount = 0;
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      // Inversion found - elements in left[i+1:] are greater than right[j]
      invCount += arr1.length - i;
      merged.push(arr2[j]);
      j++;
    }
  }

  merged.push(...arr1.slice(i));
  merged.push(...arr2.slice(j));

  return [merged, invCount];
}

// console.log(mergeAndCount([3, 4, 5, 66], [0, 11, 22]));

function mergeSortAndCount(arr: number[]): [number[], number] {
  if (arr.length <= 1) {
    return [arr, 0];
  }
  let mid = Math.floor(arr.length / 2);

  const [left, leftInvCount] = mergeSortAndCount(arr.slice(0, mid));
  const [right, rightInvCount] = mergeSortAndCount(arr.slice(mid));
  const [merged, mergedInvCount] = mergeAndCount(left, right);

  return [merged, leftInvCount + rightInvCount + mergedInvCount];
}

// console.log(mergeSortAndCount([2, 4, 1, 3, 5]));

/* 
Maximum Gap

Given an unsorted array, find the maximum difference between the successive elements in its sorted form. Return 0 if the array contains less than 2 elements.
// Input
let arr = [3, 6, 9, 1];

// Output
// 3

*/

function mergeSortedMaxGap(arr1: number[], arr2: number[]): number[] {
  let merged: number[] = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  merged.push(...arr1.slice(i));
  merged.push(...arr2.slice(j));

  return merged;
}

function mergeSortMaxGap(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSortMaxGap(arr.slice(0, mid));
  let right = mergeSortMaxGap(arr.slice(mid));

  return mergeSortedMaxGap(left, right);
}

function maxGap(arr: number[]): number {
  if (arr.length < 2) return 0;

  const sortedArr = mergeSortMaxGap(arr);
  let maximumGap = sortedArr[0] - sortedArr[1];
  for (let i = 1; i < sortedArr.length; i++) {
    const gap = sortedArr[i] - sortedArr[i - 1];
    maximumGap = Math.max(maximumGap, gap);
  }

  return maximumGap;
}

// console.log(maxGap([3, 6, 9, 1, 14]));

/*
 Smallest Missing Positive Integer

Given an unsorted integer array, find the smallest missing positive integer using merge sort.
// Input
let arr = [3, 4, -1, 1];

// Output
// 2
 */

function smallestMissingPositiveInteger(arr: number[]): number {
  let smallestMissingNumber = 1;

  for (let num of arr) {
    if (num === smallestMissingNumber) {
      smallestMissingNumber++;
    }
  }

  return smallestMissingNumber;
}

function mergeSmallMissing(arr1: number[], arr2: number[]): number[] {
  let merged: number[] = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  merged.push(...arr1.slice(i));
  merged.push(...arr2.slice(j));

  return merged;
}

function mergeSortSmallestMissing(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  let left = mergeSortSmallestMissing(arr.slice(0, mid));
  let right = mergeSortSmallestMissing(arr.slice(mid));

  return mergeSmallMissing(left, right);
}

// console.log(smallestMissingPositiveInteger([3, 4, -1, 1]));

/*
Median of Two Sorted Arrays

Given two sorted arrays, find the median of the two sorted arrays using merge sort.
// Input
let arr1 = [1, 3];
let arr2 = [2];

// Output
// 2.0

// Input
let arr1 = [1, 2];
let arr2 = [3, 4];

// Output
// 2.5

*/

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const merged = mergeArrays(nums1, nums2);
  const totalLength = merged.length;

  if (totalLength % 2 === 0) {
    // If even number of elements, return average of two middle elements
    const mid = totalLength / 2;
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    // If odd number of elements, return the middle element
    return merged[Math.floor(totalLength / 2)];
  }
}

function mergeArrays(arr1: number[], arr2: number[]): number[] {
  let result: number[] = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements from arr1, if any
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2, if any
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

// Example usage
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5

// Example usage
let arr1 = [1, 3];
let arr2 = [2];
console.log("Median:", findMedianSortedArrays(arr1, arr2)); // Output: 2.0

arr1 = [1, 2];
arr2 = [3, 4];
console.log("Median:", findMedianSortedArrays(arr1, arr2)); // Output: 2.5
