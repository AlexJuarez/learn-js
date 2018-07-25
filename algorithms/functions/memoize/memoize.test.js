import memoize from '.';

describe('memoize', () => {
  let memoizedFn;
  let fn;

  beforeEach(() => {
    fn = jest.fn((...args) => args);
    memoizedFn = memoize(fn);
    expect(fn).not.toHaveBeenCalled();
  });

  it('should only call the fn once per unique args', () => {
    memoizedFn(1);
    expect(fn).toBeCalledWith(1);
    memoizedFn(1);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be called twice if the args differ', () => {
    memoizedFn(1);
    expect(fn).toBeCalledWith(1);
    memoizedFn(2);
    expect(fn).toBeCalledWith(2);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('should handle a unique key fn', () => {
    memoizedFn = memoize(fn, a => a);
    memoizedFn('test', 1);
    expect(fn).toBeCalledWith('test', 1);
    memoizedFn('test', 2);
    expect(fn).toHaveBeenCalledTimes(1);
    memoizedFn('test2', 2);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('should pass the value of this', () => {
    const ctx = {};

    function myFn(...args) {
      expect(this).toEqual(ctx);
      return args;
    }

    memoizedFn = memoize(myFn);

    memoizedFn.call(ctx, 1);
  });
});
