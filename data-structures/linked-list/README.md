# Linked List

You are going to implement a linked list in `./index.js` that extends `LinkedList` from `./interfaces`, with the following methods.

| Method | Description |
| --- | --- |
| `constructor(compare: function)` | Create the linked list with a comparison function `(a, b) => -1: a < b | 0: a === b | 1: a > b` |
| `get length()` | Get the current size of the list |
| `prepend(...vals)` | Prepend each value to the front of the list |
| `append(...vals)` | Append each value to the end of the list |
| `remove(...vals)` | Remove each value from the list |
| `find(val: value | function)` | Return a ListNode for the found value, or else return null. If value is a function return the first node where `val(node.value) === true` |
| `pop()` | Remove and return the tail of the list |
| `shift()` | Remove and return the head of the list |
| `toArray()` | return an array of the values in the list, order perserved |
| `toString()` | return a string representation of the list |

Additionally, a implementation of `ListNode` and `Comparator` have been provided in `./interfaces` for your convenience.

## References

- [wikipedia](https://en.wikipedia.org/wiki/Linked_list)
- [video](https://www.youtube.com/watch?v=njTh_OwMljA&index=2&t=1s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)