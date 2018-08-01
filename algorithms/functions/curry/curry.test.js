import curry from '.';

const myFn = (a, b, c) => {
  return `${a}:${b}:${c}`;
};

describe('curry', () => {
  let fn;
  let curried;

  beforeEach(() => {
    fn = jest.fn(myFn);
    curried = curry(fn);
  });

  it('should collect arguments', () => {
    const a = curried('test');
    const b = a('test2');
    const c = b('test3');
    const c2 = b('test4');

    expect(c).toEqual('test:test2:test3');
    expect(c2).toEqual('test:test2:test4');
  });
});
