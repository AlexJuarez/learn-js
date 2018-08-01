# Curry

Heres a basic example of the function you will be creating.

```javascript

const curry = require('./');

function add(a, b) {
  return a + b;
}

const curried = curry(add);

console.log(curried(1)(2));
// 3
```

## References

- [wikipedia](https://en.wikipedia.org/wiki/Currying)
