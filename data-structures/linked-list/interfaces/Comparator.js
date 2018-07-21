const defaultCompare = (a, b) => {
  if (a === b) {
    return 0;
  }

  return a < b ? -1 : 1;
};

export default class Comparator {
  constructor(compare = defaultCompare) {
    this.compare = compare;
  }

  isEqual(a, b) {
    return this.compare(a, b) === 0;
  }
}
