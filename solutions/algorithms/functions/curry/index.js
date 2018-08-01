const curry = (fn) => {
  function curried(arr = []) {
    return (...args) => {
      const a = arr.concat(args);

      if (fn.length === a.length) {
        return fn.apply(this, a);
      }

      return curried(a);
    };
  }

  return curried();
};

module.exports = curry;
