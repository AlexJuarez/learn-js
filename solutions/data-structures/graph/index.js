import GraphI from ':data-structures/graph/interfaces';

export default class Graph extends GraphI {
  constructor() {
    super();

    this.edges = {};
    this.vertices = {};
  }

  addVertex(vertex) {
    this.vertices[vertex.key] = vertex;
  }

  getVertex(key) {
    return this.vertices[key];
  }

  getEdge(key) {
    return this.edges[key];
  }

  hasVertex(vertex) {
    return this.getVertex(vertex.key) != null;
  }

  hasEdge(edge) {
    return this.getEdge(edge.key) != null;
  }

  addEdge(edge) {
    const { start, end } = edge;

    if (!this.hasVertex(start)) {
      this.addVertex(start);
    }

    if (!this.hasVertex(end)) {
      this.addVertex(end);
    }

    if (!this.hasEdge(edge)) {
      this.edges[edge.key] = edge;
    }

    start.addEdge(edge);
  }

  removeEdge(edge) {
    if (this.hasEdge(edge)) {
      delete this.edges[edge.key];
    }

    const { start } = edge;

    start.removeEdge(edge);
  }

  removeVertex(vertex) {
    if (this.hasVertex(vertex)) {
      delete this.vertices[vertex.key];
    }

    Object.values(this.edges)
      .filter(edge => edge.start === vertex || edge.end === vertex)
      .forEach((edge) => {
        this.removeEdge(edge);
      });
  }

  adjacent(start, end) {
    return this.hasVertex(start) && start.findEdge(end);
  }

  neighbors(vertex) {
    return this.hasVertex(vertex) && vertex.getNeighbors();
  }

  toString() {
    return Object.keys(this.vertices).toString();
  }
}
