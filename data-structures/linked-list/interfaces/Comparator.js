export default class Comparator {
  constructor(compare) {
    this.compare = compare;
  }

  isEqual(a, b) {
    return this.compare(a, b) === 0;
  }
}
