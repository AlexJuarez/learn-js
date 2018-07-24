import Heap from '.';

describe('Heap', () => {
  let maxHeap;
  let minHeap;

  beforeEach(() => {
    maxHeap = new Heap((a, b) => a - b);
    minHeap = new Heap((a, b) => b - a);
  });

  const add = (...items) => {
    minHeap.add(...items);
    maxHeap.add(...items);
  };

  const length = (len) => {
    expect(minHeap.length).toEqual(len);
    expect(maxHeap.length).toEqual(len);
  };

  const peek = (min, max) => {
    expect(minHeap.peek()).toEqual(min);
    expect(maxHeap.peek()).toEqual(max);
  };

  const remove = (min, max) => {
    expect(minHeap.remove()).toEqual(min);
    expect(maxHeap.remove()).toEqual(max);
  };

  const assertEmpty = () => {
    expect(minHeap.isEmpty()).toBeTruthy();
    expect(maxHeap.isEmpty()).toBeTruthy();
  };

  const assertNotEmpty = () => {
    expect(minHeap.isEmpty()).toBeFalsy();
    expect(maxHeap.isEmpty()).toBeFalsy();
  };

  test('add()', () => {
    add(1, 2);
    length(2);
    peek(1, 2);
  });

  test('peek()', () => {
    add(1, 2);
    peek(1, 2);
  });

  test('remove', () => {
    add(1, 2, 3);

    remove(1, 3);
    remove(2, 2);
  });

  test('isEmpty', () => {
    assertEmpty();

    add(1, 2, 3);

    assertNotEmpty();

    remove(1, 3);
    remove(2, 2);
    remove(3, 1);

    assertEmpty();
  });
});
