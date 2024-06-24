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

  let freqCounter: any = {};
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

console.log(validAnagram("rat", "cat"));

// *************** Multiple Pointers  ***************
