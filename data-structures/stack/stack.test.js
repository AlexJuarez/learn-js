import Stack from '.';

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('isEmpty()', () => {
    expect(stack.isEmpty()).toBeTruthy();

    stack.push(1);

    expect(stack.isEmpty()).toBeFalsy();
  });

  test('length', () => {
    expect(stack.length).toEqual(0);

    stack.push(1, 2, 3);

    expect(stack.length).toEqual(3);
  });

  test('peek()', () => {
    expect(stack.peek()).toBeNull();

    stack.push(1);

    expect(stack.peek()).toEqual(1);

    stack.push(2);

    expect(stack.peek()).toEqual(2);
  });

  test('push', () => {
    stack.push(1, 2, 3);

    expect(stack.toArray()).toEqual([1, 2, 3]);
  });

  test('pop', () => {
    stack.push(1, 2, 3);

    expect(stack.pop()).toEqual(3);
  });

  test('toArray()', () => {
    stack.push(1, 2, 3);

    expect(stack.toArray()).toEqual([1, 2, 3]);
  });
});
