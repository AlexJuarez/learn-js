import LinkedList from '../linked-list';
import { Queue } from ':data-structures/queue/interfaces';

export default class MyQueue extends Queue {
  constructor() {
    super();

    this.list = new LinkedList();
  }

  get length() {
    return this.list.length;
  }

  isEmpty() {
    return this.list.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.list.head.value;
  }

  enqueue(...vals) {
    this.list.append(...vals);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    return this.list.shift().value;
  }

  toArray() {
    return this.list.toArray();
  }

  toString() {
    return this.list.toString();
  }
}
