import HeapInterface from ':data-structures/heap/interfaces';

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

    // allow for add to take multiple values
    this.add = spread(this.add.bind(this));
  }

  get length() {
    return this.items.length;
  }

  // @private
  // swaps index a with index b
  swap(idxa, idxb) {
    const tmp = this.items[idxb];
    this.items[idxb] = this.items[idxa];
    this.items[idxa] = tmp;
  }

  // @private
  // compares the value at idxa with the value at idxb
  compare(idxa, idxb) {
    return this.compareFn(this.items[idxa], this.items[idxb]);
  }

  // @private
  // return index of the left child
  leftChild(index) {
    return (2 * index) + 1;
  }

  // @private
  // return index of the right child
  rightChild(index) {
    return (2 * index) + 2;
  }

  // @private
  // return the index of the parent
  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  // @private
  // starting at index = last item in heap
  // compare value[index] with value[parent]
  // swap index and parent if value[parent] < value[index] and continue
  // else stop
  bubbleUp() {
    let index = this.items.length - 1;
    let parent = this.parent(index);

    while (index !== parent && this.compare(parent, index) < 0) {
      this.swap(index, parent);
      index = parent;
      parent = this.parent(index);
    }
  }

  // @private
  // Starting at index = root
  // compare the value[index] to value[rightChild] & value[leftChild]
  // swap index, right if value[index] < value[right]
  // swap index, left else if value[index] < value[left]
  // else stop
  bubbleDown(root) {
    let index = root;

    while (index < Math.floor(this.items.length / 2)) {
      const left = this.leftChild(index);
      const right = this.rightChild(index);

      if (right < this.items.length && this.compare(index, right) < 0) {
        this.swap(index, right);
        index = right;
      } else if (this.compare(index, left) < 0) {
        this.swap(index, left);
        index = left;
      } else {
        break;
      }
    }
  }

  add(item) {
    this.items.push(item);
    this.bubbleUp();
  }

  peek() {
    return this.items[0];
  }

  remove() {
    const val = this.peek();
    this.swap(0, this.items.length - 1);
    this.items.length--;

    this.bubbleDown(0);

    return val;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
