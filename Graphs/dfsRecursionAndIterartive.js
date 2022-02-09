class Graph {
  constructor() {
    this.vertex = {};
    this.visited = {};
  }
  addVertex(val) {
    if (!this.vertex[val]) {
      this.vertex[val] = [];
    }
    return this.vertex;
  }
  removeVertex(v1) {
    while (this.vertex[v1].length) {
      let popped = this.vertex[v1].pop();
      this.removeEdge(v1, popped);
    }
    delete this.vertex[v1];
    return this.vertex;
  }
  addEdge(v1, v2) {
    this.vertex[v1].push(v2);
    this.vertex[v2].push(v1);
    return this.vertex;
  }
  removeEdge(v1, v2) {
    this.vertex[v1] = this.vertex[v1].filter((edge) => edge !== v2);
    this.vertex[v2] = this.vertex[v2].filter((edge) => edge !== v1);
    return this.vertex;
  }

  traverseRecursive(start) {
    let result = [];
    let visited = {};
    let vertex = this.vertex;

    function dfs(v) {
      visited[v] = true;
      result.push(v);
      vertex[v].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });
    }
    dfs(start);
    return result;
  }
  traverseIterartive(start) {
    let result = [];
    let visited = {};
    let stack = [start];
    visited[start] = true;

    while (stack.length) {
      let popped = stack.pop();
      result.push(popped);
      this.vertex[popped].forEach((vertex) => {
        if (!visited[vertex]) {
          visited[vertex] = true;
          stack.push(vertex);
        }
      });
    }
    return result;
  }
}

let m = new Graph(3);
m.addVertex("A");
m.addVertex("B");
m.addVertex("C");
m.addVertex("D");
m.addVertex("E");
m.addVertex("F");
m.addEdge("A", "B");
m.addEdge("A", "C");
m.addEdge("B", "D");
m.addEdge("C", "E");
m.addEdge("D", "E");
m.addEdge("D", "F");
m.addEdge("E", "F");

// m.removeEdge("A","B");
// m.removeVertex("A");
//m.traverseRecursive("A")
m.traverseIterartive("A");
