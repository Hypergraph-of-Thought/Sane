// hypergraph.js

class Hypergraph {
  constructor() {
    this.nodes = new Map();
    this.hyperedges = new Map();
  }

  addNode(id, data) {
    this.nodes.set(id, { id, data });
  }

  addHyperedge(id, data, nodeIds) {
    this.hyperedges.set(id, { id, data, nodes: nodeIds });
  }

  getNodes() {
    return Array.from(this.nodes.values());
  }

  getHyperedges() {
    return Array.from(this.hyperedges.values());
  }

  traverse(startNodeId, callback) {
    const visited = new Set();
    const queue = [startNodeId];

    while (queue.length > 0) {
      const currentNodeId = queue.shift();
      if (!visited.has(currentNodeId)) {
        visited.add(currentNodeId);
        const node = this.nodes.get(currentNodeId);
        callback(node);

        for (const edge of this.hyperedges.values()) {
          if (edge.nodes.includes(currentNodeId)) {
            edge.nodes.forEach(nodeId => {
              if (!visited.has(nodeId)) {
                queue.push(nodeId);
              }
            });
          }
        }
      }
    }
  }
}

module.exports = Hypergraph;