# Memoize

Implement a way to cache the results of a function based on the args.

```javascript

const memoize = require('./');

function myFn (a, b) {
  console.log(`preformed: ${a} + ${b}`);
  return a + b;
}

function keyFn (a, b) {
  return `[${a},${b}]`;
}

const memoizedFn = memoize(myFn, keyFn);
const result = memoizedFn(1, 2);
// should log preformed: 1 + 2
const result2 = memoizedFn(1, 2);
// nothing should log and result = result2
```

