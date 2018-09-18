function trampoline (fn) {
  return (...args) => {
    let result = fn(...args);

    while (typeof result === 'function') {
      result = result();
    }

    return result;
  };
}

function fibonacci(n, a = 0, b = 1) {
  if (n === 0) return a;
  if (n === 1) return b;

  return () => fibonacci(n - 1, b, a + b);
}

module.exports = {
  trampoline,
  fibonacci,
};