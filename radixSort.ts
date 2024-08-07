// RADIX SORT
// Radix sort is a special sorting algorithm that works on lists of numbers
// It never makes comparisons between elements!
// It exploits the fact that information about the size of a number is encoded in the number of digits.
// More digits means bigger number!

// RADIX SORT HELPERS
// In order to implement radix sort, it's helpful to build a few helper functions first:
// getDigit(num, place) - returns the digit in num at the given place value
// getDigit (12345) 0); //5
// getDigit(12345, 1); // 4
// getDigit(12345, 2); // 3
// getDigit(12345, 3); // 2
// getDigit(12345, 4); // 1
// getDigit(12345, 5); // 0

// Helper function to get the digit at a specific place
function getDigit(num: number, place: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// Helper function to get the number of digits in a number
function digitCount(num: number): number {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// console.log(digitCount(12345));

// mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list
// mostDigits([11234, 56,71]）：//4
// mostDigits([1, 1, 11111, 11); // 5
//mostDigits([12, 34, 56, 781); // 2

// Helper function to get the maximum number of digits in the array
function mostDigits(nums: number[]): number {
  let maxDigits = 0;
  for (let num of nums) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  return maxDigits;
}

// Radix Sort function
function radixSort(nums: number[]): number[] {
  const maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    // Create buckets for each digit (0 to 9)
    const digitBuckets: number[][] = Array.from({ length: 10 }, () => []);
    // Place numbers into buckets based on the current digit
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    // Flatten the buckets back into the array
    // nums = ([] as number[]).concat(...digitBuckets);
    nums = digitBuckets.flat();
  }
  return nums;
}

// console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));

// Big O of RADIX SORT
// TIME Complexity(Best) O(nk)

// Time Complexity (Average) O(nk)

// Time Complexity (Worst) O(nk)

// Space Complexity O(n + k)

function radixSortSimple(arr: number[]): number[] {
  const max = Math.max(...arr);
  const maxDigits = Math.floor(Math.log10(max)) + 1;

  for (let digit = 0; digit < maxDigits; digit++) {
    const buckets: number[][] = Array.from({ length: 10 }, () => []);

    for (const num of arr) {
      const digitValue = Math.floor(num / Math.pow(10, digit)) % 10;
      buckets[digitValue].push(num);
    }

    arr = buckets.flat();
  }

  return arr;
}

function countingSortByDigit(
  arr: number[],
  exp: number,
  base: number = 10
): void {
  let n = arr.length;
  let output = new Array(n).fill(0);
  let count = new Array(base).fill(0);

  // Count occurrences of each digit
  for (let i = 0; i < n; i++) {
    const digit = Math.floor(arr[i] / exp) % base;
    count[digit]++;
  }

  // Modify count array to store actual positions
  for (let i = 1; i < base; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % base;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  //Copy the output array to arr
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

function countingSort1(arr: number[], exp: number, base: number = 10): void {
  let n = arr.length;
  let output = new Array(n).fill(0);
  let count = new Array(base).fill(0);

  for (let i = 0; i < n; i++) {
    const digit = Math.floor(arr[i] / exp) % base;
    count[digit]++;
  }

  for (let i = 1; i < base; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % base;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

function countingSort2(arr: number[], exp: number, base: number = 10): void {
  let n = arr.length;
  let output = new Array(n).fill(0);
  let count = new Array(base).fill(0);

  for (let i = 0; i < n; i++) {
    const digit = Math.floor(arr[i] / exp) % base;
    count[digit]++;
  }

  for (let i = 1; i < base; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % base;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

function radixSort1(arr: number[], base: number = 10): number[] {
  if (arr.length <= 1) return arr;

  const max = Math.max(...arr);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= base) {
    countingSortByDigit(arr, exp, base);
  }
  return arr;
}

console.log("Sorted array:", radixSort1([170, 45, 75, 90, 802, 24, 2, 66]));
