# Debounce

You will create a function that will only execute the last call if called within the wait window.

```javascript
const debounce = require('./');

const sayHi = function() {
  console.log('hi');
}

const debounced = debounce(sayHi, 100);

debounced();
debounced();
debounced();
debounced();

// hi (this should only print once)

```

There is a lot in common between [throttle](../throttle) and **debounce**, the general difference is that debounce only executes once restarting its wait timer for each new call. Where as throttle executes at a set interval unaffected by subsequent calls.

## References

- [underscore implementation](https://underscorejs.org/docs/underscore.html#section-86)