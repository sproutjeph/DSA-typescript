// *************** Algorithm  ***************
//  Algorithm is a process or set of steps to accomplish a certain task

// *************** How to solve problems  ***************
// Ask yourself these questions
// * Can I restate the problem in my own words?
// * What are the inputs that go into the problem?
// * What are the output that will come out from the solution of the problem?
// * Can the output be determined from the input?

// AN EXAMPLE

// ==============================================================
// Write a function which takes in a string and
// returns counts of each character in the string.
// ==============================================================

// Think about the edge caseses
// Think about lowerCase and Uppercase,numbers and special charaters and also spaces
// What if no string was inputed in the function

function sodu(str: string) {
  //create an obj to hold the result
  // loop tru the str convert to toLowerCase
  // check for alphnumeric charaters. /[a-z0-9]/.check("ajsjjjs112?")
  // if obj(char) is in obj increment else obj[char] = 1
  //return an obj
}

function charCount(str: string): { [key: string]: number } {
  let result: { [key: string]: number } = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }

  return result;
}

function charCount2(str: string): { [key: string]: number } {
  let obj: { [key: string]: number } = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }

  return obj;
}

// use this
function charCount3(str: string): { [key: string]: number } {
  let obj: { [key: string]: number } = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      obj[char] = (obj[char] || 0) + 1;
    }
  }

  return obj;
}

//console.log(charCount3("helloooooH   1222 + !"));

// This is more efficent to check if a charater is AlphNumeric than use /[a-z0-9]/.test()
function isAlphaNumeric(str: string): boolean {
  let code: number;
  for (let i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (
      !(
        (
          (code > 47 && code < 58) || // numeric (0-9)
          (code > 64 && code < 91) || // upper alpha (A-Z)
          (code > 96 && code < 123)
        ) // lower alpha (a-z)
      )
    ) {
      return false;
    }
  }
  return true;
}

// Example usage:
const text = "&";
//console.log(isAlphaNumeric(text)); // Output: true

// *************** Some Problem solving patters  ***************
// • Frequency Counter
// • Multiple Pointers
// • Sliding Window
// • Divide and Conquer
// • Dynamic Programming
// • Greedy Algorithms
// • Backtracking
// • Many more!

// *************** Frequency Counter  ***************
// This pattern uses objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

// EXAMPLE

// ==============================================================
// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array
// has it's corresponding value squared in the second array.
// The frequency of values must be the same.
// ==============================================================

function same(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) return false;
  let freqCounter1: any = {};
  let freqCounter2: any = {};

  for (let val of arr1) {
    freqCounter1[val] ? (freqCounter1[val] += 1) : (freqCounter1[val] = 1);
    // this is short and good
    // freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }

  for (let key in freqCounter1) {
    const squaredKey = Number(key) ** 2;
    if (freqCounter2[squaredKey] !== freqCounter1[key]) {
      return false;
    }
  }
  return true;
}

// console.log(same([1, 2, 3], [1, 4, 9]));

// ==============================================================
// ANAGRAMS
// Given two strings, write a function to determine if the second string is
// an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another,
// such as cinema, formed from iceman.
// validAnagram("', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram( 'anagram', 'nagaram') // true
// validAnagram("rat", "car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty','geywrt') // true
// ==============================================================

function validAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;
  let freqCounter: { [key: string]: number } = {};
  for (let val of str1) {
    freqCounter[val] = (freqCounter[val] || 0) + 1;
  }

  for (let val of str2) {
    if (!freqCounter[val]) {
      return false;
    } else {
      freqCounter[val] -= 1;
    }
  }
  return true;
}

// console.log(validAnagram("cat", "cat"));

// *************** Multiple Pointers  ***************
// Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
// Very efficient for solving problems with minimal space complexity as well

// Example
// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
// sumzero ([-3, -2, -1,0,1,2,3]) // [-3,3]
// sumzero([-2, 0, 1, 3]) // undefined
// sumzero([1, 2, 3]) // undefined

// Naive solution  Big O = O(N^2)

function sumZero(arr: number[]): number[] | undefined {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// console.log(sumZero1([-3, -2, -1, 0, 1, 2, 3, 4]));

// good solution Big O = O(N)

function sumZero1(arr: number[]): number[] | undefined {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]];
    } else if (arr[left] + arr[right] !== 0) {
      right--;
    } else {
      left++;
    }
  }
}

// countUnique Values
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
// countUniqueValues ([1,1, 1,1,1,21]) // 2
// countUniqueValues ([1,2,3, 4, 4,4,7,7,12,12,131) // 7
// countUniqueValues ( []) // 0
// countUniqueValues ([-2,-1, -1,0,1]) // 4

function countUniqueValues(arr: number[]): number {
  if (arr.length === 0) return 0;
  // if the length of the array is > 0 then there must be a unique value
  let uniqueCount = 1;
  let prevValue = arr[0];

  for (let i of arr) {
    if (prevValue !== i) {
      uniqueCount++;
      prevValue = i;
    }
  }
  return uniqueCount;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 131]));

// *************SLIDING WINDOW*****************
// This pattern involves creating a
// window which can either be an array or number from one position to another
// Depending on a certain condition, the window either increases or closes (and a new window is created)
// Very useful for keeping track of a subset of data in an array/string etc.
