import { trampoline, fibonacci } from '.';

const factorial = (n, sum = 1) => n === 0 ? sum : () => factorial(n - 1, sum * n);

describe('trampoline', () => {
  it('should trampoline the described factorial function', () => {
    const fac = trampoline(factorial);

    expect(fac(6)).toEqual(720);
    expect(fac(10000)).toBe(Infinity);
  });

  it('should trampoline the provided fibonacci function', () => {
    const fib = trampoline(fibonacci);

    expect(fib(0)).toEqual(0);
    expect(fib(1)).toEqual(1);
    expect(fib(2)).toEqual(1);
    expect(fib(7)).toEqual(13);

    expect(fib(100)).toEqual(354224848179262000000);
    expect(fib(10000)).toEqual(Infinity);
  });
});
