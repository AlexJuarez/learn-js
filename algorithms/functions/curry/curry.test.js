import curry from '.';

describe('curry', () => {
  it('curries the fn at least once', () => {
    const add = curry((a, b) => a + b);

    expect(add(1)(2)).toEqual(3);
  });

  it('curries the function with a single argument', () => {
    const output = curry(n => n);

    expect(output(1)).toEqual(1);
  });

  it('curries the function even if multiple args are given', () => {
    const add = curry((a, b, c) => a + b + c);

    expect(add(1, 2)(3)).toEqual(add(1)(2)(3));
  });

  it('doesn\'t share state between calls', () => {
    const add = curry((a, b, c) => a + b + c);

    expect(add(1)(2)(3)).toEqual(6);
    expect(add(2)(3)(4)).toEqual(9);
  });

  it('works with other types of functions', () => {
    const merge = curry((a, b, c) => [a, b, c].join(', '));

    expect(merge('1')(2)(3)).toEqual('1, 2, 3');
  });

  it('doesn\'t share inner state', () => {
    const add = curry((a, b, c, d) => a + b + c + d);
    
    const lastTwo = add(1)(2);

    expect(lastTwo(3)(4)).toEqual(10);

    const lastOne = lastTwo(5);

    expect(lastOne(6)).toEqual(14);
  });
});
