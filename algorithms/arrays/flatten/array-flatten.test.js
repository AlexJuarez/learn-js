import flatten from '.';

describe('Array.flatten', () => {
  it('should flatten nested arrays', () => {
    const input = [1, [2, 3]];
    const output = [1, 2, 3];

    expect(flatten(input)).toEqual(output);
  });

  it('should flatten deeply nested arrays', () => {
    const input = [1, [2, 3, [4, 5]], [6, 7]];
    const output = [1, 2, 3, 4, 5, 6, 7];

    expect(flatten(input)).toEqual(output);
  });

  // if your implementation is recursive you will need
  // to change it to be iterative
  it('should flatten large arrays', () => {
    let input = [];
    const output = [];

    for (let i = 0; i < 100000; i++) {
      input = [i, input];
      output.push(i);
    }

    output.reverse();

    expect(flatten(input)).toEqual(output);
  });
});
