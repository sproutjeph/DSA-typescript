// Objects are unordered, key value pairs
// When to use objects:
//   - When you don't need order
//   - When you need to associate keys with values
//   - When you need to store a collection of values indexed by keys that are dynamically chosen at runtime
// When you need fast access / insertion / removal,

// Creating an object
let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3],
};

// Big 0 of Objects
// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(1)
// When you don't need any ordering,
// objects are an excellent choice

// Big 0 of Object Methods
// Object.keys - O(N)
// Object.values - O(N)
// Object.entries - O(N)
// hasOwnProperty - O(1)

// Array Ordered list
let names = ["Mbah", "Chisom"];

// when to use Arrays
// When you need order
//• When you need fast access / insertion and removal (sort of....)

// Big O of Arrays
// insertion = it depends
// removal = it depends
// searching = O(n)
// Access = O(1)

// inserting at the bigging of a array costly because the array will have to be reindexed, also removing from the bigging is costly.
// Removing from the end is O(1)

// Big O of Array operations
// push = O(1)
// pop = O(1)
// shift O(N)
// concat = O(N)
// Slice = O(N)
// Splice = O(N)
// sort = O(N * log N)
// forEach, map, filter, reduce, etc = O(N)
