export default class Vertex {
  constructor(value, keyFn = k => k) {
    this.value = value;
    this.edges = [];
    this.keyFn = keyFn;
  }

  addEdge(edge) {
    this.edges.push(edge);
  }

  removeEdge(edge) {
    const index = this.edges.indexOf(edge);

    if (index !== -1) {
      this.edges.splice(index, 1);
    }
  }

  getNeighbors() {
    return this.edges.filter(edge => edge.start === this).map(edge => edge.end);
  }

  getEdges() {
    return this.edges.map(edge => edge.value);
  }

  getDegree() {
    return this.edges.length;
  }

  hasEdge(edge) {
    const index = this.edges.indexOf(edge);

    return index !== -1;
  }

  hasNeighbor(vertex) {
    return this.getNeighbors().indexOf(vertex) !== -1;
  }

  findEdge(vertex) {
    return this.edges.find(edge => edge.end === vertex);
  }

  get key() {
    return this.keyFn(this.value);
  }

  clearEdges() {
    this.edges.forEach(edge => this.removeEdge(edge));

    return this;
  }

  toString() {
    return `{${this.key}: ${this.value}}[${this.edges.map(e => e.toString()).join(', ')}]`;
  }
}
