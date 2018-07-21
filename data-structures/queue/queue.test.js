import Queue from '.';

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('isEmpty()', () => {
    expect(queue.isEmpty()).toBeTruthy();

    queue.enqueue(1);

    expect(queue.isEmpty()).toBeFalsy();
  });

  test('length', () => {
    expect(queue.length).toEqual(0);

    queue.enqueue(1, 2, 3);

    expect(queue.length).toEqual(3);
  });

  test('peek()', () => {
    expect(queue.peek()).toBeNull();

    queue.enqueue(1);

    expect(queue.peek()).toEqual(1);
  });

  test('enqueue', () => {
    queue.enqueue(1, 2, 3);

    expect(queue.toArray()).toEqual([1, 2, 3]);
  });

  test('dequeue', () => {
    queue.enqueue(1, 2, 3);

    expect(queue.dequeue()).toEqual(1);
  });

  test('toArray()', () => {
    queue.enqueue(1, 2, 3);

    expect(queue.toArray()).toEqual([1, 2, 3]);
  });
});
