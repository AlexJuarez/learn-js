# Graph

You are going to write a graph implementation that extends `Graph` from `./interfaces`. Two helper classes have been included for your convience they are `Vertex` and `Edge`.

| Method | Description |
| --- | --- |
| `getVertex(key: string): Vertex` | Return the vertex with the given key, null if not in the graph |
| `getEdge(key: string): Edge` | Return the edge with the given key, null if not in the graph |
| `addVertex(vertex: Vertex)` | Add a vertex to the graph |
| `hasVertex(vertex: Vertex): bool` | Does the graph contain the given vertex? |
| `hasEdge(edge: Edge): bool` | Does the graph contain the given edge? |
| `addEdge(edge: Edge)` | Add the given edge to the graph, and make sure to add any vertices that are not already part of the graph |
| `removeEdge(edge: Edge)` | Remove the given edge from the graph |
| `removeVertex(vertex: Vertex)` | Remove the given vertex from the graph, make sure to remove all edges that reference this vertex. |
| `adjacent(start: vertex, end: vertex): bool` | Is there an edge between start and end? |
| `neighbors(vertex: Vertex): Vertex[]` | return an array of vertices that the given vertex has outbound edges with |
| `toString()` | write a way to visually represent your graph |

## References

- [wikipedia](https://en.wikipedia.org/wiki/Graph_(abstract_data_type))