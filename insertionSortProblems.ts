/*
Basic Insertion Sort:
Implement insertion sort to sort an array of integers in ascending order.
Input: [64, 34, 25, 12, 22, 11, 90]
Output: [11, 12, 22, 25, 34, 64, 90]
*/

function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }

  return arr;
}

// console.log(insertionSort([64, 34, 25, 12, 22, 11, 90]));

/*
Descending Order Insertion Sort:
Modify the insertion sort algorithm to sort an array in descending order.
Input: [5, 2, 8, 12, 1, 6]
Output: [12, 8, 6, 5, 2, 1]
*/

function insertionSortDescending(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j] > arr[j - 1]; j--) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    }
  }

  return arr;
}

console.log(insertionSortDescending([5, 2, 8, 12, 1, 6]));

/*
Insertion Sort with Strings:
Sort an array of strings alphabetically using insertion sort.
Input: ["dog", "cat", "alligator", "bear", "elephant"]
Output: ["alligator", "bear", "cat", "dog", "elephant"]
*/

function insertionSortString(arr: string[]): string[] {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }

  return arr;
}

console.log(
  insertionSortString(["dog", "cat", "alligator", "bear", "elephant"])
);

/*
Insertion Sort with Custom Comparator:
Sort an array of objects based on a specific property using insertion sort.
Input: [{name: "Alice", age: 30}, {name: "Bob", age: 25}, {name: "Charlie", age: 35}]
Output: Sort by age in ascending order.
*/

interface IPerson {
  name: string;
  age: number;
}

function insertionSortObject(arr: IPerson[], key: keyof IPerson): IPerson[] {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j][key] < arr[j - 1][key]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }

  return arr;
}

console.log(
  insertionSortObject(
    [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
      { name: "Charlie", age: 35 },
    ],
    "age"
  )
);

/*
Adaptive Insertion Sort:
Modify insertion sort to stop early if the array becomes sorted before all iterations are complete.
*/

function adaptiveInsertionSort(arr: number[]): number[] {
  let swapped: boolean;
  for (let i = 1; i < arr.length; i++) {
    swapped = false;
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      swapped = true;
      if (!swapped) break;
    }
  }

  return arr;
}
