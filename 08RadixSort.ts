/*
RADIX SORT
Radix sort is a special sorting algorithm that works on lists of numbers
It never makes comparisons between elements!
It exploits the fact that information about the size of a number is encoded in the number of digits.
More digits means a bigger number

Big O of Radix sort; best O(nk), average O(nk), worst O(nk), space O(n + k)
*/

// RADIX SORT HELPERS
// In order to implement radix sort, it's helpful to build a few helper functions first:
// getDigit(num, place) - returns the digit in num at the given place value
// getDigitAtPlaceValue(12345,0); // 5
// getDigitAtPlaceValue(12345,1)// 4
// getDigitAtPlaceValue(12345, 2); // 3
// getDigitAtPlaceValue(12345, 3); // 2
// getDigitAtPlaceValue(12345, 4); // 1
//getDigitAtPlaceValue(12345, 5); // 0

// (num / 10^placeValue) % 10
function getDigitAtPlaceValue(num: number, placeValue: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, placeValue)) % 10;
}

function digitCount(num: number): number {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getMostDigits(nums: number[]): number {
  let max = 0;
  for (let i of nums) {
    max = Math.max(max, digitCount(i));
  }
  return max;
}

function radixSort(nums: number[]): number[] {
  const maxDigitCount = getMostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    // Create buckets for each digit (0 to 9)
    const digitBuckets: number[][] = Array.from({ length: 10 }, () => []);

    // Place each number in the corresponding bucket based on the current digit
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigitAtPlaceValue(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }

    // Flatten the buckets back into the original array
    nums = digitBuckets.flat();
  }

  return nums;
}

// console.log(getDigitAtPlaceValue(12345, 0));
// console.log(digitCount(1234));
console.log(radixSort([123, 4, 56, -1, 33, 55, 66, 2, 0, 4]));
