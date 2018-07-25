import Heap from ':solutions/data-structures/heap';
import { PQ, PQNode } from ':data-structures/priority-queue/interfaces';

export default class PriorityQueue extends PQ {
  constructor() {
    super();

    this.queue = new Heap(this.comparePriority);
  }

  add(value, priority = 0) {
    const pqn = new PQNode(value, priority);

    this.queue.add(pqn);
  }

  remove(value) {
    const index = this.queue.find({ value }, this.compareValue);
    if (index == null) {
      return null;
    }

    return this.queue.removeIndex(index).value;
  }

  changePriority(value, priority) {
    const index = this.queue.find({ value }, this.compareValue);

    this.queue.removeIndex(index);

    const node = new PQNode(value, priority);

    this.queue.add(node);
  }

  has(value) {
    return this.queue.find({ value }, this.compareValue) != null;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.queue.peek().value;
  }

  isEmpty() {
    return this.queue.isEmpty();
  }

  comparePriority(a, b) {
    return a.compare(b);
  }

  compareValue(a, b) {
    return a.value - b.value;
  }
}
