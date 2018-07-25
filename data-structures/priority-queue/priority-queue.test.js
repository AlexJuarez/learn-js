import PriorityQueue from '.';

describe('PriorityQueue', () => {
  let pq;

  beforeEach(() => {
    pq = new PriorityQueue();
  });

  test('add', () => {
    pq.add(1);
    expect(pq.peek()).toEqual(1);
  });

  test('remove', () => {
    pq.add(1);
    expect(pq.remove(1)).toEqual(1);
  });

  test('has', () => {
    pq.add(1);
    expect(pq.has(1)).toBeTruthy();
  });

  test('peek', () => {
    pq.add(1);
    pq.add(2);

    expect(pq.peek()).toEqual(1);
  });

  test('changePriority', () => {
    pq.add(1);
    pq.add(2);

    pq.changePriority(2, 1);

    expect(pq.peek()).toEqual(1);

    pq.changePriority(1, 2);

    expect(pq.peek()).toEqual(2);
  });

  test('isEmpty', () => {
    expect(pq.isEmpty()).toBeTruthy();
  });
});
