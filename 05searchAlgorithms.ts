// ****************SEARCH ALGORITHMS **********************

/*
JavaScript has search!
There are many different search methods on arrays in JavaScript:
• indexof .
• includes
• find
• findindex
But how do these functions work?
These are linear search
Big O of Linear search:
Best case = O(1)
Average case = O(N)
Worst case = O(N) 
*/

/* 
An Example of Linear Search
Pseudocode
• This function accepts an array and a value
• Loop through the array and check if the current array element is equal to the value
• If it is, return the index at which the element is found
• If the value is never found, return -1
*/

function linearSearch(arr: number[], val: number): number {
  if (arr.length === 0) return -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// console.log(linearSearch([1, 2, 3, 4], 20));

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

function binarySearch(arr: number[], target: number): number {
  let firstIdx = 0;
  let lastIdx = arr.length - 1;

  while (firstIdx <= lastIdx) {
    let middleIdx = Math.floor((firstIdx + lastIdx) / 2);
    let middleElement = arr[middleIdx];

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

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 7));

// Naive String Search
/*
Pseudocode

• Write a function called naiveStringSearch that accepts two strings long and short
• Loop over the longer string
• Loop over the shorter string
• If the characters don't match, break out of the inner loop
• If the characters do match, keep going
• If you complete the inner loop and find a match, increment the count of matches
• Return the count
*/

function naiveStringSearch(long: string, short: string): number {
  let count = 0;
  for (let i = 0; i <= long.length - short.length; i++) {
    let match = true;
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        match = false;
        break;
      }
    }
    if (match) count++;
  }

  return count;
}

console.log(naiveStringSearch("jephthah", "jeph"));
