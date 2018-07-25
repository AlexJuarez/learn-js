import once from '.';

describe('once', () => {
  it('should only call the fn once', () => {
    let count = 0;

    const fn = () => {
      ++count;
    };

    const wrappedFn = once(fn);

    wrappedFn();
    expect(count).toEqual(1);
    wrappedFn();
    expect(count).toEqual(1);
  });
});
