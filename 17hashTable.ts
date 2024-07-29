/*
What is a Hash Table?

A hash table, also known as a hash map, is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

Key Concepts

	1.	Hash Function: A function that converts input (or ‘key’) into a fixed-size string of bytes. The output is typically used as an index into an array where the value associated with the key can be stored or retrieved.
	2.	Collision Handling: Since different keys can hash to the same index, a mechanism to handle these collisions is necessary. Common methods include:
	•	Chaining: Store multiple elements in the same bucket using a data structure like a linked list.
	•	Open Addressing: Find another slot within the array using a second function.
	3.	Load Factor: A measure that indicates how full the hash table is. It is calculated as the number of elements divided by the number of buckets. A high load factor can lead to more collisions and decreased performance.
	4.	Rehashing: When the load factor exceeds a certain threshold, the hash table is resized, and all existing entries are rehashed into the new array.

  BIG O of HASH TABLES
(average case)
• Insert: O(1)
• Deletion: O(1)
• Access: O(1)
*/

class HashTable<K, V> {
  constructor(
    private table: Array<[K, V][]> = new Array(100).fill([]).map(() => []),
    private size: number = 100
  ) {}
  private hash(key: K): number {
    let total = 0;
    if (typeof key === "string") {
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
    } else if (typeof key === "number") {
      total = key;
    } else {
      total = JSON.stringify(key).length;
    }
    return total % this.size;
  }

  set(key: K, value: V): void {
    const index = this.hash(key);
    const bucket = this.table[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
  }

  get(key: K): V | undefined {
    const index = this.hash(key);
    const bucket = this.table[index];
    for (const [k, v] of bucket) {
      if (k === key) {
        return v;
      }
    }
    return undefined;
  }

  remove(key: K): boolean {
    const index = this.hash(key);
    const bucket = this.table[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false;
  }
  values(): V[] {
    const uniqueValues = new Set<V>();
    for (const bucket of this.table) {
      for (const [, value] of bucket) {
        uniqueValues.add(value);
      }
    }
    return Array.from(uniqueValues);
  }
  keys(): K[] {
    const uniqueKeys = new Set<K>();
    for (const bucket of this.table) {
      for (const [key] of bucket) {
        uniqueKeys.add(key);
      }
    }
    return Array.from(uniqueKeys);
  }
}

const hashTable = new HashTable<string, number>();

hashTable.set("apple", 5);
hashTable.set("banana", 8);
hashTable.set("cherry", 3);

console.log(hashTable.get("banana")); // Output: 8
console.log(hashTable.get("grape")); // Output: undefined

hashTable.remove("apple");
console.log(hashTable.get("apple")); // Output: undefined
