const curry = (fn) => {
  function curried(arr = []) {
    return (arg) => {
      const args = arr.concat(arg);

      if (fn.length === args.length) {
        return fn.apply(this, args);
      }

      return curried(args);
    };
  }

  return curried();
};

module.exports = curry;
