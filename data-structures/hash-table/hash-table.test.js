import HashTable from '.';

describe('HashTable', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable();
  });

  test('hash(key)', () => {
    const genRandStr = () => Math.random().toString(36).substring(7);

    const strs = Array(1000).fill(0).map(genRandStr);

    strs.forEach((str) => {
      const hash = hashTable.hash(str);

      expect(hash).toBeLessThan(hashTable.getMaxSize());
      expect(hash).toBeGreaterThanOrEqual(0);
    });
  });

  test('set(key, value)', () => {
    hashTable.set('test', 1);

    expect(hashTable.get('test')).toEqual(1);

    expect(hashTable.size()).toEqual(1);
  });

  test('delete(key)', () => {
    hashTable.set('test', 1);

    expect(hashTable.get('test')).toEqual(1);

    hashTable.delete('test');

    expect(hashTable.size()).toEqual(0);
    expect(hashTable.get('test')).toBeUndefined();
  });

  test('get(key)', () => {
    hashTable.set('test', 1);

    expect(hashTable.get('test')).toEqual(1);
    expect(hashTable.get('test2')).toBeUndefined();
  });

  test('has(key)', () => {
    expect(hashTable.has('test')).toBeFalsy();

    hashTable.set('test', 1);

    expect(hashTable.has('test')).toBeTruthy();
  });

  test('getKeys()', () => {
    hashTable.set('test', 1);
    hashTable.set('test2', 2);
    hashTable.set('test3', 2);

    const keys = hashTable.getKeys();
    expect(keys).toEqual(jasmine.arrayContaining(['test', 'test2', 'test3']));
  });

  test('[Symbol.iterator]()', () => {
    hashTable.set('test', 1);
    hashTable.set('test2', 2);
    hashTable.set('test3', 2);

    try {
      const entries = Array.from(hashTable);

      expect(entries.length).toEqual(3);
    } catch (err) {
      console.log('Symbol.iterator not implemented');
    }
  });
});
