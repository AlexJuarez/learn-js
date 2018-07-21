# Hash Table | Dictionary | Hash Map

In computing, a hash table (hash map) is a data structure which implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found

Ideally, the hash function will assign each key to a unique bucket, but most hash table designs employ an imperfect hash function, which might cause hash collisions where the hash function generates the same index for more than one key. Such collisions must be accommodated in some way.

![Hash table](https://en.wikipedia.org/wiki/Hash_table#/media/File:Hash_table_3_1_1_0_1_0_0_SP.svg)

Hash collision resolution by chaining bucket entries.

![Hash table resolving collisions with chained entries](https://en.wikipedia.org/wiki/Hash_table#/media/File:Hash_table_5_0_1_1_1_1_1_LL.svg)

## Implementation

| Method | Description |
| --- | --- |
| `constructor(hashTableSize: number)` | initialize the hash table |
| `hash(key: string)` | return a number that will return an even distribution for 0 - number of buckets |
| `set(key: string, value: any)` | put value into location `hash(key)` |
| `delete(key: string)` | remove value from hash table |
| `get(key: string)` | return the value stored, or `undefined` |
| `has(key: string)` | return true if the table has the key, false otherwise |
| `getKeys()` | return an array containing all keys in the table |
| `getMaxSize()` | return the number of buckets |
| `size()` | return the number of elements currently in the table |
| `[Symbol.iterator]()` | return all of the values of the hash table |

## References

- [wikipedia](https://en.wikipedia.org/wiki/Hash_table)
- [video](https://www.youtube.com/watch?v=shs0KM3wKv8&index=4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)