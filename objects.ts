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
