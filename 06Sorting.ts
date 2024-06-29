/*
What is sorting?
Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.
Examples
• Sorting numbers from smallest to largest

Why do we need to learn this?
• Sorting is an incredibly common task, so it's good to know how it works
• There are many different ways to sort things, and different techniques have their own advantages and disadvantages
It is asked in interviews
*/

/* 
BubbleSort
A sorting algorithm where the largest values bubble up to the top!
[5, 3, 4, 1,2)
[ 3, 5, 4, 1, 2 ]
*/

/* 
Before we sort, we must swap!
Many sorting algorithms involve some type of swapping functionality (e.g. swapping to numbers to put them in order)
 ES5
function swap(arr, idx1, idx2){
var temp = arr[idx1];
arr[idx1] = arr[idx2];
arr[idx2] = temp;
}
 ES2015
const swap = (arr, idx1, idx2) => {
[arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
}
*/

/* 
Pseudocode for bubbleSort
Define a function called bubbleSort that accepts an array arr of numbers.
Loop over the array from the end to the beginning using a variable i.
Initialize i to the length of the array.
Decrease i by 1 in each iteration until it reaches 1.
Inside the outer loop, loop from the beginning of the array to i-1 using a variable j.
Initialize j to 0.
Increase j by 1 in each iteration until it reaches i-2.
For each pair of adjacent elements in the array:
If the element at position j is greater than the element at position j+1:
Swap the elements at positions j and j+1.
After the outer loop completes, return the sorted array.
*/

function bubbleSort(arr: number[]): number[] {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

// this is more clear and logical and may be more efficent
// In a simple term bubble sort is just compare two adjacent elem is the first > than the following swap do it unit there is no more swaps
function bubbleSort1(arr: number[]): number[] {
  let swapped: boolean;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        //swap
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

// BIG O of Bubble sort is O(n^2)

// console.log(bubbleSort1([5, 6, 7, 2, 1, 3]));

//***************Selection Sort********************
/*
Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position
         ======Selection Sort Pseudocode====
• Store the first element as the smallest value you've seen so far.
• Compare this item to the next item in the array until you find a smaller number.
• If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
• If the "minimum" is not the value (index) you initially began with, swap the two values.
• Repeat this with the next element until the array is sorted.
*/

// Big of selection sort is O(n^2) but it is more efficent than bubble sort
function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    //swap
    if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
}

// console.log(selectionSort([5, 6, 7, 2, 1, 3, 0]));

// ***************Insertion Sort*******************
/*
Insertion Sort
Builds up the sort by gradually creating a larger left half which is always sorted
[ 5,3, 4, 1, 2 ]
[3, 5,4, 1, 2]
[3, 4, 5,1,2 ]
[ 1, 3, 4, 5,2]
[ 1, 2, 3, 4, 5]


Insertion Sort Pseudocode
• Start by picking the second element in the array
• Now compare the second element with the one before it and swap if necessary.
• Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
• Repeat until the array is sorted.
*/

function insertionSort(arr: number[]): number[] {
  // Loop through each element starting from the second one
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    // The elem we are going to place in the right spot
    let j = i - 1;
    // Move the elems that are bigger than the currentVal to the right
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    // Place the cureentVal in the right spot
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([9, 4, 6, 3, 1, 2]));

/*
       Big 0 of Sorting Algorithms

Bubble sort: Best=O(N), Average= O(n^2), Worst= O(n^2), Space= O(1)   

Insertion sort: Best=O(N), Average= O(n^2), Worst= O(n^2), Space= O(1)   

Selection sort Best=O(N^2), Average= O(n^2), Worst= O(n^2), Space= O(1)   
*/
