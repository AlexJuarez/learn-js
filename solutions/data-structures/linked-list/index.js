import { LinkedList, ListNode, Comparator } from ':data-structures/linked-list/interfaces';

const spread = (fn) => {
  return (...vals) => {
    [...vals].forEach(v => fn(v));
  };
};

export default class MyLinkedList extends LinkedList {
  constructor(compare) {
    super();

    this.compare = new Comparator(compare);

    this.size = 0;
    this.head = null;
    this.tail = null;

    this.prepend = spread(this.prepend.bind(this));
    this.append = spread(this.append.bind(this));
    this.remove = spread(this.remove.bind(this));
  }

  get length() {
    return this.size;
  }

  prepend(val) {
    const node = new ListNode(val);

    node.next = this.head;

    if (this.head != null) {
      this.head.prev = node;
    }

    this.head = node;
    this.size++;

    if (this.tail == null) {
      this.tail = this.head;
    }
  }

  append(val) {
    const node = new ListNode(val);

    node.prev = this.tail;

    if (this.tail != null) {
      this.tail.next = node;
    }

    this.tail = node;

    this.size++;

    if (this.head == null) {
      this.head = this.tail;
    }
  }

  remove(val) {
    if (this.size === 0) {
      return;
    }

    const node = this.find(val);

    if (node == null) {
      return;
    }

    const { next, prev } = node;
    if (prev != null) {
      prev.next = next;
    }

    if (next != null) {
      next.prev = prev;
    }

    this.size--;

    if (this.compare.isEqual(node.value, this.head.value)) {
      this.head = next;
    }

    if (this.compare.isEqual(node.value, this.tail.value)) {
      this.tail = prev;
    }
  }

  find(val) {
    if (this.size === 0 || val == null) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if ((typeof val === 'function' && val(currentNode.value))
        || this.compare.isEqual(currentNode.value, val)
      ) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  pop() {
    if (this.size === 0) {
      return null;
    }

    this.size--;

    const node = this.tail;

    this.tail = node.prev;

    if (this.size === 0) {
      this.head = null;
    }

    return node;
  }

  shift() {
    if (this.size === 0) {
      return null;
    }

    this.size--;

    const node = this.head;

    this.head = node.next;

    if (this.size === 0) {
      this.tail = null;
    }

    return node;
  }

  toArray() {
    const nodes = [];

    let node = this.head;
    while (node) {
      nodes.push(node.value);
      node = node.next;
    }

    return nodes;
  }

  toString() {
    return this.toArray().map(n => n.toString()).toString();
  }
}
