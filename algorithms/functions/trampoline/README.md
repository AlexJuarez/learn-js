# Trampolines

Trampolines allow you to change recursive functions into iterative calls eliminating the danger of a stack overflow.

## Standard Recursion

```javascript
function factorial(n) {
  if (n === 0) return 1;

  return n * factorial(n - 1);
}

factorial(10000) // throw Maximum call stack size exceeded
```

## With Trampolines

```javascript
const { trampoline } = require('./');

function factorial(n, sum = 1) {
    return n === 0 ? sum : () => factorial(n - 1, sum * n);
}

const fac = trampoline(factorial);

fac(10000) // -> Infinity
```

## Implementation

You are going to create two functions, a trampoline and fibonacci function that can be trampolined

```javascript

const { trampoline, fibonacci } = require('./');

const fib = trampoline(fibonacci);

console.log(fib(7)); // 13

```