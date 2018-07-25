import throttle from '.';

jest.useFakeTimers();

describe('throttle', () => {
  let throttled;
  let count;
  let myFn;

  beforeEach(() => {
    count = 0;
    myFn = jest.fn((num) => {
      count += num;
      return count;
    });
    throttled = throttle(myFn, 100);
  });

  it('should call my function right away', () => {
    throttled(10);
    expect(count).toEqual(10);
  });

  it('should wait to call my function a second time', () => {
    throttled(10);
    throttled(20);
    expect(count).toEqual(10);
    jest.runOnlyPendingTimers();
    expect(count).toEqual(30);
  });

  it('should return', () => {
    expect(throttled(10)).toEqual(10);
    expect(throttled(20)).toEqual(10);
    jest.runOnlyPendingTimers();
    expect(count).toEqual(30);
  });

  it('should ignore additional calls', () => {
    throttled(10);
    throttled(20);
    throttled(30);
    jest.runAllTimers();
    expect(count).toEqual(30);
  });
});
