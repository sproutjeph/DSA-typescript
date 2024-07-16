/* 
Counting sort is a non-comparative integer sorting algorithm that works well for sorting arrays with a known range of integer values. It's particularly efficient when the range of possible values is not significantly larger than the number of elements to be sorted.



Step-by-step explanation:

1. First, we find the maximum value in the input array. This determines the size of our counting array.

2. We create a counting array initialized with zeros. The index of this array represents the value, and the element at that index will store the count of that value.

3. We iterate through the input array, incrementing the count for each value in the counting array.

4. We modify the counting array so that each element now contains the actual position of the value in the final sorted array. We do this by adding each count to the sum of all previous counts.

5. We create an output array of the same size as the input array.

6. We iterate through the input array in reverse order. For each element:
   - We look up its count (which is now its position)
   - We place the element in the output array at that position minus one
   - We decrement the count for that element

7. Finally, we return the sorted output array.

Time Complexity:
- The time complexity of count sort is O(n + k), where n is the number of elements in the input array and k is the range of input (maximum value - minimum value + 1).
- This makes it very efficient when k is not significantly larger than n.

Space Complexity:
- The space complexity is O(n + k), as we need additional arrays for counting and output.

Use Cases:
1. Count sort is ideal for sorting integers with a known, limited range.
2. It's particularly efficient when the range of possible values is close to the number of elements to be sorted.
3. It's often used as a subroutine in radix sort.
4. It's useful in scenarios where you need to count occurrences of elements, not just sort them.

Advantages:
- It can be faster than comparison-based sorting algorithms for suitable datasets.
- It's stable, meaning that equal elements maintain their relative order in the sorted output.

Disadvantages:
- It's not suitable for sorting non-integer data.
- It can be inefficient if the range of possible values is much larger than the number of elements to be sorted.

Would you like me to elaborate on any specific part of this explanation or provide an example of using this algorithm?
*/

function countingSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  // Find the maximum element
  const max = Math.max(...arr);

  // Create a counting array
  const count: number[] = new Array(max + 1).fill(0);

  // Count occurrences of each element
  for (const num of arr) {
    count[num]++;
  }

  // Modify count array to store actual positions
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  const output: number[] = new Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  return output;
}

function countingSort1(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const max = Math.max(...arr);
  const count = new Array(max + 1).fill(0);

  for (let val of arr) {
    count[val]++;
  }

  for (let i = 0; i <= max; i++) {
    count[i] += count[i - 1];
  }

  const output = new Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  return output;
}

console.log(countingSort([4, 2, 2, 8, 3, 3, 1]));
