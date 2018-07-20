import LinkedList from '.';

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList((a, b) => a - b);
  });

  test('constructor', () => {
    expect(list.length).toEqual(0);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  test('prepend', () => {
    list.prepend(3);
    list.prepend(1);

    expect(list.toArray()).toEqual([1, 3]);
  });

  test('append', () => {
    list.append(3);
    list.append(1);

    expect(list.toArray()).toEqual([3, 1]);
  });

  test('remove', () => {
    list.append(2);
    list.prepend(1);
    list.append(3);

    expect(list.toArray()).toEqual([1, 2, 3]);
    expect(list.length).toEqual(3);

    list.remove(2);

    expect(list.toArray()).toEqual([1, 3]);
    expect(list.length).toEqual(2);

    list.remove(2);

    expect(list.toArray()).toEqual([1, 3]);
    expect(list.length).toEqual(2);
  });

  test('find', () => {
    expect(list.find(1)).toBeNull();

    list.append(1, 2, 3);

    expect(list.find(2).value).toEqual(2);
    expect(list.find(v => v === 3).value).toEqual(3);
  });

  test('pop', () => {
    expect(list.pop()).toBeNull();

    list.append(1, 2, 3);

    expect(list.pop()).toEqual(3);
    expect(list.pop()).toEqual(2);
    expect(list.pop()).toEqual(1);
    expect(list.pop()).toBeNull();
  });

  test('shift', () => {
    expect(list.shift()).toBeNull();

    list.append(1, 2, 3);

    expect(list.shift()).toEqual(1);
    expect(list.shift()).toEqual(2);
    expect(list.shift()).toEqual(3);
    expect(list.shift()).toBeNull();
  });
});
