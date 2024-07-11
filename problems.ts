/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
*/

function singleNumber(nums: number[]): number {
  let lookUp: { [key: string]: number } = {};

  let ans = 0;
  for (let val of nums) {
    lookUp[val] = (lookUp[val] || 0) + 1;
  }
  // console.log(lookUp);

  for (let key in lookUp) {
    if (lookUp[key] === 1) {
      ans = Number(key);
    }
  }

  return ans;
}

function singleNumber2(nums: number[]): number {
  const lookUp = new Map<number, number>();

  // Count occurrences
  for (const num of nums) {
    lookUp.set(num, (lookUp.get(num) || 0) + 1);
  }

  // Find the number that appears only once
  for (const [num, count] of lookUp) {
    if (count === 1) {
      return num;
    }
  }

  // This line should never be reached given the problem constraints
  throw new Error("No single number found");
}

/*
How XOR solves the problem:

XOR has some useful properties:

It's commutative: a ^ b = b ^ a
It's associative: (a ^ b) ^ c = a ^ (b ^ c)
Any number XOR itself is 0: a ^ a = 0
Any number XOR 0 is the number itself: a ^ 0 = a


When we XOR all numbers in the array:

The duplicate numbers will cancel each other out (a ^ a = 0)
The single number will remain (a ^ 0 = a)

Time and space complexity:

Time complexity: O(n) - we iterate through the array once
Space complexity: O(1) - we only use one variable regardless of input size
*/

function singleNumber1(nums: number[]): number {
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
}

// console.log(singleNumber([1, 22, 3, 3, 3, 4, 55, 55, 4, 22]));
