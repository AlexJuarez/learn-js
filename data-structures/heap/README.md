# Heap

You are going ot implement a Heap in `./index.js` that extends `Heap` from `./interfaces.js`, with the following methods.

| Method | Description |
| --- | --- |
| `constructor(compare: function` | Create the Heap with a comparsion function `(a, b) => -1: a < b, 0: a === b, 1: a > b` |
| `get length()` | Get the current size of the heap |
| `add(...items)` | Add a value or values to the heap |
| `remove()` | remove and return the first item from the heap |
| `peek()` | return the first item in the heap |
| `isEmpty()` | return true if the heap is empty |
| `toString()` | return a toString representation of the heap |

There are several ways to implement a heap, and the internal details are left up to you. Provided in solutions is an example of an array implementation.

## References

- [wikipedia](https://en.wikipedia.org/wiki/Heap_(data_structure))
- [video](https://www.youtube.com/watch?v=t0Cq6tVNRBA&index=5&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
