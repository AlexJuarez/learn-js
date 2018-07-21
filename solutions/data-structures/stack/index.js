import LinkedList from '../linked-list';
import Stack from ':data-structures/stack/interfaces';

export default class MyStack extends Stack {
  constructor() {
    super();

    // Our implementation of linked list makes
    // implementing stack trival
    this.list = new LinkedList();
  }

  get length() {
    return this.list.length;
  }

  isEmpty() {
    return this.list.length === 0;
  }

  // look at the last item in the list
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.list.tail.value;
  }

  // push values on to the stack
  push(...vals) {
    this.list.append(...vals);
  }

  // return and remove the last value in the list
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
