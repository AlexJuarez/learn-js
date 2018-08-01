function debounce(fn, wait) {
  let timeout;
  let result;

  function execute(context, args) {
    timeout = null;
    result = fn.apply(context, args);
  }

  function debounced(...args) {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => execute(this, args), wait);

    return result;
  }

  debounced.cancel = () => {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}

module.exports = debounce;
