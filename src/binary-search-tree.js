const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
 class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    this._root = addInside(this._root, data);

    function addInside(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (data === node.data) {
        return node;
      }

      if (node.data < data) {
        node.right = addInside(node.right, data);
      } else {
        node.left = addInside(node.left, data);
      }

      return node;
    }
  }

  has(data) {
    return has(this._root, data);

    function has(node, data) {
      if (!node) {
        return false;
      }

      if (data === node.data) {
        return true;
      }

      if(node.data < data) {
        return has(node.right, data);

      } else {
        return has(node.left, data);
      }
    }
  }

  find(data) {
    return find(this._root, data);

    function find(node, data) {
      if (!node) {
        return null;
      }

      if (data === node.data)  {
        return node;
      }

      if(node.data < data) {
        return find(node.right, data);
      } else {
        return find(node.left, data);
      }
    }
  }

  remove(data) {
    this._root = remove(this._root, data);

    function remove(node, data) {
      if(!node) {
        return null;
      }

      if(node.data > data) {
        node.left = remove(node.left, data);
        return node;
      } else if(data > node.data) {
        node.right = remove(node.right, data);
        return node;
      } else {

        if(!node.left && !node.right) {
          return null;
        }

        if(!node.left) {
          node = node.right;
          return node;
        }

        if(!node.right) {
          node = node.left;
          return node;
        }

        let rightMin = node.right;

        while(rightMin.left) {
          rightMin = rightMin.left;
        }

        node.data = rightMin.data;

        node.right = remove(node.right, rightMin.data);

        return node;
      }
    }
  }

  min() {
   if(!this._root) {
     return null;
   }

   let minNode = this._root;

   while(minNode.left) {
    minNode = minNode.left;
   }

   return minNode.data;
  }

  max() {
    if(!this._root) {
      return null;
    }
 
    let maxNode = this._root;
 
    while(maxNode.right) {
      maxNode = maxNode.right;
    }
 
    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
