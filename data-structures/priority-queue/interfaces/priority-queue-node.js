export default class PriorityQueueNode {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }

  compare(node) {
    if (this.priority === node.priority) {
      return 0;
    }

    return this.priority < node.priority ? -1 : 1;
  }

  isEqual(node) {
    return this.value === node.value;
  }
}
