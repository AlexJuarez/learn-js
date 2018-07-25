export default function memoize(fn, keyFn) {
  const cache = {};

  const getKey = keyFn || ((...args) => JSON.stringify(args));

  return function memoizedFn(...args) {
    const key = getKey(...args);

    if (cache[key] === undefined) {
      cache[key] = fn.apply(this, args);
    }

    return cache[key];
  };
}
