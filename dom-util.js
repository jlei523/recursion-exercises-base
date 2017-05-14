const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/node
  node.childNodes.forEach(smallerNode => visitAllNodes(smallerNode, callback));
  callback(node);
};

const flattenTreeToArray = function(node) {
  let arr = [];
  visitAllNodes(node, value => arr.push(value));
  return arr;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};