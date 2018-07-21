import Heap from '.';

describe('Heap', () => {
  let heap;

  beforeEach(() => {
    heap = new Heap((a, b) => a - b);
  });

  test('add()', () => {
    heap.add(1);
    heap.add(2);

    expect(heap.length).toEqual(2);
    expect(heap.peek()).toEqual(2);
  });

  test('remove', () => {
    heap.add(1, 2, 3);

    expect(heap.peek()).toEqual(3);
    heap.remove(heap.peek());
    expect(heap.peek()).toEqual(2);
  });

  test('find', () => {
    heap.add(3, 4, 3, 2, 2, 1);

    expect(heap.find(3)).toEqual(1);
    expect(heap.find(4)).toEqual(0);
  });

  test('isEmpty', () => {
    expect(heap.isEmpty()).toBeTruthy();

    heap.add(1, 2, 3);

    expect(heap.isEmpty()).toBeFalsy();

    heap.remove(heap.peek());
    heap.remove(heap.peek());
    heap.remove(heap.peek());

    expect(heap.isEmpty()).toBeTruthy();
  });
});
