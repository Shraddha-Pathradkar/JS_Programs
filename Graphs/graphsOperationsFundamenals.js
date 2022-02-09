class Graph {
  constructor() {
    this.vertex = {};
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
}

let m = new Graph(3);
m.addVertex("S");
m.addVertex("H");
m.addVertex("R");
m.addVertex("A");
m.addVertex("D");
m.addEdge("S", "H");
m.addEdge("S", "R");
m.addEdge("S", "D");
m.addEdge("S", "D");
m.addEdge("S", "A");
m.addEdge("S", "R");
m.removeEdge("S", "H");
m.removeVertex("S");
