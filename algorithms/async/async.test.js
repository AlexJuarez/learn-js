const { sequence, parallel, race } = require('./');

jest.useFakeTimers();

const delay = (fn, { err, data, context }, ts) => {
  setTimeout(() => fn.call(context, err, data), ts);
};

const asyncFn = (fn, ts = 10) => {
  let result;
  let error;

  return jest.fn((cb, data) => {
    try {
      result = fn(data);
    } catch (err) {
      error = err;
    }

    delay(cb, { data: result, err: error }, ts);
  });
};

describe('async', () => {
  describe('sequence', () => {
    let fns;
    let callback;

    beforeEach(() => {
      fns = [
        asyncFn(() => 'test'),
        asyncFn(data => `${data}ing`),
      ];

      callback = expected => jest.fn((err, results) => {
        expect(results).toEqual(expected);
      });
    });

    it('should run fns in sequence', () => {
      const cb = callback('testing');

      sequence(fns)(cb);

      jest.runAllTimers();
      expect(cb).toHaveBeenCalledTimes(1);
    });

    it('should allow for a delayed callback', () => {
      const cb = callback('testing');
      const mySeq = sequence(fns);

      jest.runAllTimers();

      mySeq(cb);
      expect(cb).toHaveBeenCalledTimes(1);
    });
  });

  describe('parallel', () => {
    let fns;
    let callback;

    beforeEach(() => {
      fns = [
        asyncFn(() => 1),
        asyncFn(() => 2),
      ];

      callback = expected => jest.fn((err, results) => {
        expect(results).toEqual(expected);
      });
    });

    it('should execute in parallel', () => {
      const cb = callback([1, 2]);
      parallel(fns)(cb);

      jest.runAllTimers();

      expect(cb).toHaveBeenCalledTimes(1);
    });

    it('should allow for a delay in execution', () => {
      const cb = callback([1, 2]);
      const executor = parallel(fns);

      jest.runAllTimers();

      executor(cb);

      expect(cb).toHaveBeenCalledTimes(1);
    });
  });

  describe('race', () => {
    let fns;
    let callback;

    beforeEach(() => {
      fns = [
        asyncFn(() => 1, 100),
        asyncFn(() => 2, 10),
      ];

      callback = expected => jest.fn((err, results) => {
        expect(results).toEqual(expected);
      });
    });

    it('should have one result', () => {
      const cb = callback(2);
      race(fns)(cb);

      jest.runAllTimers();

      expect(cb).toHaveBeenCalledTimes(1);
    });

    it('should hold the result', () => {
      const cb = callback(2);
      const raceway = race(fns);

      jest.runAllTimers();

      raceway(cb);
      expect(cb).toHaveBeenCalledTimes(1);
    });
  });
});
