import HeapInterface from './interfaces';

const spread = fn => (...items) => {
  [...items].forEach((i) => {
    fn(i);
  });
};

export default class Heap extends HeapInterface {
  constructor(compare) {
    super();

    this.compareFn = compare;

    this.items = [];
    this.add = spread(this.add.bind(this));
  }

  get length() {
    return this.items.length;
  }

  swap(idxa, idxb) {
    const tmp = this.items[idxb];
    this.items[idxb] = this.items[idxa];
    this.items[idxa] = tmp;
  }

  compare(idxa, idxb) {
    return this.compareFn(this.items[idxa], this.items[idxb]);
  }

  leftChild(index) {
    return (2 * index) + 1;
  }

  rightChild(index) {
    return (2 * index) + 2;
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  bubbleUp() {
    let index = this.items.length - 1;
    let parent = this.parent(index);

    while (index !== parent && this.compare(parent, index) < 0) {
      this.swap(index, parent);
      index = parent;
      parent = this.parent(index);
    }
  }

  add(item) {
    this.items.push(item);
    this.bubbleUp();
  }

  peek() {
    return this.items[0];
  }

  remove(item) {
    let index = this.find(item);

    while (index < this.items.length) {
      const left = this.leftChild(index);
      const right = this.rightChild(index);

      if (left < this.items.length && this.compare(index, left) < 0) {
        this.swap(index, left);
        index = left;
      } else if (right < this.items.length && this.compare(index, right) > 0) {
        this.swap(index, right);
        index = right;
      } else {
        this.items.pop();
      }
    }
  }

  find(item) {
    let index = 0;

    while (index < this.items.length) {
      if (this.items[index] === item) {
        return index;
      }

      if (this.compareFn(this.items[index], item) > 0) {
        index = this.leftChild(index);
      } else {
        index = this.rightChild(index);
      }
    }

    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
