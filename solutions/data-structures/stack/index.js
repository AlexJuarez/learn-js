import LinkedList from '../linked-list';
import Stack from ':data-structures/stack/interfaces';

export default class MyStack extends Stack {
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

    return this.list.tail.value;
  }

  push(...vals) {
    this.list.append(...vals);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    return this.list.pop().value;
  }

  toArray() {
    return this.list.toArray();
  }

  toString() {
    return this.list.toString();
  }
}
