// **************** BINARY SEARCH **********************

/*
Binary search is a much faster form of search
• Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
• Binary search only works on sorted arrays!
Big O of Binary Worst and Average = O(log n)
Best case = O(1)
*/

/*
Binary Search Pseudocode
• This function accepts a sorted array and a value
• Create a left pointer at the start of the array, and a right pointer at the end of the array
• While the left pointer comes before the right pointer:
• Create a pointer in the middle
• If you find the value you want, return the index
• If the value is too small, move the left pointer up
• If the value is too large, move the right pointer down
• If you never find the value, return -1
*/

//==============================================================
// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1
// search（[1,2,3,4,5,6],4） // 3
// search ([1,2,3,4,5,6],6) // 5
// search([1, 2, 3, 4, 5, 61, 11) // -1
//==============================================================

// This is Binary search it uses divide and conquer
// Time Complexity - Log(N) - Binary Search!
function binarySearch(array: number[], target: number): number {
  let firstIdx = 0;
  let lastIdx = array.length - 1;
  while (firstIdx <= lastIdx) {
    let middleIdx = Math.floor((firstIdx + lastIdx) / 2);
    let middleElement = array[middleIdx];

    if (middleElement < target) {
      firstIdx = middleIdx + 1;
    } else if (middleElement > target) {
      lastIdx = middleIdx - 1;
    } else {
      return middleIdx;
    }
  }

  return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));

/*
Problem: Find the First and Last Position of an Element in a Sorted Array

Given a sorted array of integers nums and a target value target, write a function to find the starting and ending position of a given target value. If the target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
*/

function searchRange(nums: number[], target: number): number[] {
  let left = findPosition(nums, target, true);
  if (left === -1) {
    return [-1, -1];
  }
  let right = findPosition(nums, target, false);
  return [left, right];
}

function findPosition(
  nums: number[],
  target: number,
  leftmost: boolean
): number {
  let low = 0;
  let high = nums.length - 1;
  let result = -1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] > target) {
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      result = mid;
      if (leftmost) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }

  return result;
}

// Example usage:
//console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
//console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // Output: [-1, -1]
//console.log(searchRange([], 0)); // Output: [-1, -1]
//console.log(searchRange([0, 0], 0)); // Output: [-1, -1]

/*
LeetCode problem #744
Problem: Find the Smallest Letter Greater Than Target
Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target.
Note that the letters wrap around. For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.
Examples:

Input: letters = ["c","f","j"], target = "a"
Output: "c"
Input: letters = ["c","f","j"], target = "c"
Output: "f"
Input: letters = ["c","f","j"], target = "d"
Output: "f"
Input: letters = ["c","f","j"], target = "g"
Output: "j"
Input: letters = ["c","f","j"], target = "j"
Output: "c"

*/

function smallestLetter(letters: string[], target: string): string {
  let low = 0;
  let high = letters.length - 1;

  // Handle the wrap-around case.  We're looking for the first letter greater than the target
  if (target >= letters[high]) {
    return letters[0];
  }

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (letters[mid] > target) {
      high = mid - 1;
    } else low = mid + 1;
  }
  return letters[low];
}

console.log(smallestLetter(["c", "f", "j"], "a")); // c
console.log(smallestLetter(["c", "f", "j"], "c")); // f

/*
LeetCode problem #162,
Problem: Find Peak Element
A peak element is an element that is strictly greater than its neighbors.
Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
You may imagine that nums[-1] = nums[n] = -∞.
You must write an algorithm that runs in O(log n) time.
Example 1:
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:
Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
Constraints:

1 <= nums.length <= 1000
-2^31 <= nums[i] <= 2^31 - 1
nums[i] != nums[i + 1] for all valid i.
*/

function findPeakElement(nums: number[]): number {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] > nums[mid + 1]) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return low;
}

// console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));

/*
LeetCode problem #33,
Problem: Search in Rotated Sorted Array
You are given an integer array nums sorted in ascending order (with distinct values), and an integer target.
Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
If target is found in the array return its index, otherwise return -1.
You must write an algorithm with O(log n) runtime complexity.
Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:
Input: nums = [1], target = 0
Output: -1
Constraints:

1 <= nums.length <= 5000
-10^4 <= nums[i] <= 10^4
All values of nums are unique.
nums is guaranteed to be rotated at some pivot.
-10^4 <= target <= 10^4
*/

function search(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // Check if the left half is sorted
    if (nums[low] <= nums[mid]) {
      if (target >= nums[low] && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    // Right half is sorted
    else {
      if (target > nums[mid] && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1; // Target not found
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
