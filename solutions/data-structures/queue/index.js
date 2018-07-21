import LinkedList from '../linked-list';
import Queue from ':data-structures/queue/interfaces';

export default class MyQueue extends Queue {
  constructor() {
    super();

    // our implementation of linked list makes
    // creating this queue trival.
    this.list = new LinkedList();
  }

  get length() {
    return this.list.length;
  }

  isEmpty() {
    return this.list.length === 0;
  }

  // Returns the first value in the queue
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.list.head.value;
  }

  // Adds these values to the end of the queue
  enqueue(...vals) {
    this.list.append(...vals);
  }

  // returns and removes the frist value
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
