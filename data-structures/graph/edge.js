export default class edge {
  constructor(start, end, value) {
    this.start = start;
    this.end = end;
    this.value = value;
  }

  get key() {
    return `${this.start.key}->${this.end.key}`;
  }

  reverse() {
    const tmp = this.start;
    this.start = this.end;
    this.end = tmp;

    return this;
  }

  toString() {
    return this.key;
  }
}
