import debounce from '.';

jest.useFakeTimers();

describe('debounce', () => {
  let count;
  let myFn;
  let debounced;

  beforeEach(() => {
    count = 0;
    myFn = jest.fn((...args) => {
      args.forEach((n) => {
        count += n;
      });
    });
    debounced = debounce(myFn, 100);
  });

  it('should execute once', () => {
    debounced(10);

    jest.runOnlyPendingTimers();

    expect(myFn).toHaveBeenCalledTimes(1);
    expect(count).toEqual(10);
  });

  it('should execute once even if called lots', () => {
    debounced(1);
    debounced(5);
    debounced(10);

    jest.runOnlyPendingTimers();

    expect(myFn).toHaveBeenCalledTimes(1);
    expect(count).toEqual(10);
  });

  it('should execute more than once', () => {
    debounced(10);
    jest.runTimersToTime(100);
    debounced(20);
    jest.runTimersToTime(100);

    expect(myFn).toHaveBeenCalledTimes(2);
    expect(count).toEqual(30);
  });

  it('gets called with args', () => {
    debounced(10, 20, 30);

    jest.runOnlyPendingTimers();

    expect(myFn).toHaveBeenCalledTimes(1);
    expect(count).toEqual(60);
  });
});
