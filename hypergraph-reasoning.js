// hypergraph-reasoning.js

const Hypergraph = require('./hypergraph');

class HypergraphReasoning {
  constructor(hypergraph) {
    this.hypergraph = hypergraph;
  }

  inferRelationships(startNode, endNode) {
    const relationships = [];
    this.hypergraph.traverse(startNode, (node) => {
      if (node && node.id === endNode.id) {
        relationships.push(...this.hypergraph.getHyperedges().filter((hyperedge) => hyperedge.nodes.includes(node.id)));
      }
    });
    return relationships;
  }

  findCommonalities(startNode, endNode) {
    const commonalities = [];
    this.hypergraph.traverse(startNode, (node) => {
      if (node && node.id === endNode.id) {
        commonalities.push(node);
      }
    });
    return commonalities;
  }

  findDifferences(startNode, endNode) {
    const differences = [];
    this.hypergraph.traverse(startNode, (node) => {
      if (node && node.id !== endNode.id) {
        differences.push(node);
      }
    });
    return differences;
  }
}

module.exports = HypergraphReasoning;