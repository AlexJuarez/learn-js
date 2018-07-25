module.exports = function once(fn) {
  let executed = false;

  return (...args) => {
    if (executed) {
      return null;
    }

    executed = true;

    return fn(...args);
  };
}
