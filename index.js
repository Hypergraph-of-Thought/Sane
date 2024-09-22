// index.js

const Hypergraph = require('./hypergraph');
const HypergraphReasoning = require('./hypergraph-reasoning');

class HypergraphAgent {
  constructor() {
    this.hypergraph = new Hypergraph();
    this.reasoning = new HypergraphReasoning(this.hypergraph);
  }

  createHypergraph() {
    this.hypergraph.addNode('A', 'Node A');
    this.hypergraph.addNode('B', 'Node B');
    this.hypergraph.addNode('C', 'Node C');
    this.hypergraph.addHyperedge('AB', 'Hyperedge AB', ['A', 'B']);
  }
}

module.exports = HypergraphAgent;