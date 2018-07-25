/**
 * This thorttle implementation calls the fn when
 * evoked and if evoked before the thottling interval
 * creates a timeout to be evaluated later.
 * @param {function} fn
 * @param {number} interval
 */
module.exports = function throttle(fn, interval) {
  let timeout = null;
  let lastCalled = 0;
  // keep track of the last result
  let result = null;

  function throttled(...args) {
    const now = new Date();

    if (interval < now - lastCalled) {
      if (timeout != null) {
        clearTimeout(timeout);
        timeout = null;
      }

      lastCalled = now;
      result = fn.apply(this, args);
    } else if (!timeout) {
      const delay = interval - (now - lastCalled);

      timeout = setTimeout(() => {
        timeout = null;
        result = fn.apply(this, args);
      }, delay);
    }

    // return the result
    return result;
  }

  throttled.cancel = () => {
    clearTimeout(timeout);
    lastCalled = 0;
    timeout = null;
  };

  return throttled;
}
