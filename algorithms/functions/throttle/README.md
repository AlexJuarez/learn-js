# Throttle

You are going implement a function throttle that wraps a function and automagically controls the rate at which that function is evaluated.

```javascript
const throttle = require('./');

let lastCalled = new Date();

function timePassed() {
  const now = new Date();
  console.log(`${now - lastCalled}ms has passed`);
  lastCalled = now;
}

const throttledFn = throttle(timePassed, 100);

throttledFn();
// 0ms has passed
throttledFn();
// 101ms has passed
// if we added additional calls without waiting
// they would be ignored

```

## References

- [implementation in underscore](https://underscorejs.org/docs/underscore.html#section-85)