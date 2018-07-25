# Once

The purpose of this function wrapper is to ensure that a function is executed once, regardless of args.

```javascript

const once = require('./');

let count = 0;
const fn = () => {
  console.log(`Execution Count: ${++count}`);
};

const wrappedFn = once(fn);

wrappedFn();
// count should be 1
wrappedFn();
// count should still be 1
```

