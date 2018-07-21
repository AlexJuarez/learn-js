import HashTable from ':data-structures/hash-table/interfaces';
import LinkedList from '../linked-list';

const DEFAULT_SIZE = 32;

export default class MyHashTable extends HashTable {
  constructor(hashTableSize = DEFAULT_SIZE) {
    super();

    // create a count variable to track the size
    this.count = 0;
    this.buckets = new Array(hashTableSize);
  }

  // There are several other ways to hash
  // a string in js (https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery)
  hash(key) {
    const hash = Array
      .from(key)
      .map(s => s.charCodeAt(0))
      .reduce(
        (accumlator, charCode) => (accumlator + charCode),
      );

    return hash % this.buckets.length;
  }

  getBucket(key) {
    const hash = this.hash(key);

    // if the bucket is empty
    // initalize a linked list
    if (this.buckets[hash] == null) {
      this.buckets[hash] = new LinkedList();
    }

    return this.buckets[hash];
  }

  getEntry(bucket, key) {
    const node = bucket.find(e => e.key === key);

    return node && node.value;
  }

  set(key, value) {
    const bucket = this.getBucket(key);
    const entry = this.getEntry(bucket, key);

    if (!entry) {
      bucket.append({ key, value });
      this.count++;
    } else {
      entry.value = value;
    }
  }

  delete(key) {
    const bucket = this.getBucket(key);
    const entry = this.getEntry(bucket, key);

    if (entry) {
      bucket.remove(entry);
      this.count--;
    }
  }

  get(key) {
    const bucket = this.getBucket(key);
    const entry = this.getEntry(bucket, key);

    return entry != null ? entry.value : undefined;
  }

  has(key) {
    return this.get(key) !== undefined;
  }

  getKeys() {
    return this.buckets
      .reduce((arr, bucket) => arr.concat(bucket.toArray().map(e => e.key)), []);
  }

  getMaxSize() {
    return this.buckets.length;
  }

  size() {
    return this.count;
  }

  [Symbol.iterator]() {
    const entries = this.buckets
      .reduce((arr, bucket) => arr.concat(bucket.toArray()), []);

    return {
      next() {
        return {
          done: entries.length === 0,
          value: entries.pop(),
        };
      },
    };
  }
}
