import Graph from '.';
import Vertex from './vertex';
import Edge from './edge';

const parseGraph = (vertices, edges) => {
  const graph = new Graph();

  vertices.forEach((value) => {
    graph.addVertex(new Vertex(value));
  });

  edges.forEach((str) => {
    const vertexs = str.split(/->/g);
    const start = graph.getVertex(vertexs[0]);
    const end = graph.getVertex(vertexs[1]);

    graph.addEdge(new Edge(start, end));
  });

  return graph;
};

describe('Graph', () => {
  const vertices = 'A,B,C,D,E,F,G'.split(/,/g);
  const edges = ['A->B', 'A->E', 'A->F', 'F->G', 'B->C', 'C->D'];

  let graph;

  beforeEach(() => {
    graph = parseGraph(vertices, edges);
  });

  test('getVertex', () => {
    expect(graph.getVertex('A')).not.toBeNull();
    expect(graph.getVertex('H')).toBeFalsy();
  });

  test('getEdge', () => {
    expect(graph.getEdge('A->B')).not.toBeNull();
    expect(graph.getEdge('A->D')).toBeFalsy();
  });

  test('hasVertex', () => {
    vertices.forEach((key) => {
      const vertex = graph.getVertex(key);

      expect(graph.hasVertex(vertex)).toBeTruthy();
    });
  });

  test('hasEdge', () => {
    edges.forEach((key) => {
      const edge = graph.getEdge(key);

      expect(graph.hasEdge(edge)).toBeTruthy();
    });
  });

  test('removeVertex', () => {
    const F = graph.getVertex('F');
    const edge = graph.getEdge('A->F');

    graph.removeVertex(F);
    expect(graph.hasEdge(edge)).toBeFalsy();
    const A = graph.getVertex('A');

    expect(graph.neighbors(A).map(v => v.key)).toEqual(jasmine.arrayContaining(['B', 'E']));
  });

  test('removeEdge', () => {
    const A = graph.getVertex('A');
    const F = graph.getVertex('F');

    const edge = graph.getEdge('A->F');

    graph.removeEdge(edge);
    expect(graph.hasVertex(A)).toBeTruthy();
    expect(graph.hasVertex(F)).toBeTruthy();
    expect(graph.hasEdge(edge)).toBeFalsy();
  });

  test('adjacent', () => {
    const A = graph.getVertex('A');
    const B = graph.getVertex('B');
    const G = graph.getVertex('G');

    expect(graph.adjacent(A, B)).toBeTruthy();
    expect(graph.adjacent(A, G)).toBeFalsy();
  });

  test('neighbors', () => {
    const A = graph.getVertex('A');

    expect(graph.neighbors(A).map(vertex => vertex.key)).toEqual(jasmine.arrayContaining(['B', 'E', 'F']));
  });
});
