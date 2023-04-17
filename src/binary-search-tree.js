const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this._root = null;
    }

    root() {
        return this._root;
    }

    add(data) {
        if (this._root === null) {
            this._root = new Node(data);
        } else {
            let tmp = this._root;
            while (true) {
                if (data > tmp.data) {
                    if (tmp.right != null) {
                        tmp = tmp.right;
                    } else {
                        tmp.right = new Node(data);
                        break;
                    }
                } else {
                    if (tmp.left != null) {
                        tmp = tmp.left;
                    } else {
                        tmp.left = new Node(data);
                        break;
                    }
                }
            }
        }
    }

    has(data) {
        let tmp = this._root;
        while (tmp != null) {
            if (tmp.data == data) {
                return true;
            } else {
                if (data > tmp.data) {
                    tmp = tmp.right;
                } else {
                    tmp = tmp.left;
                }
            }
        }
        return false;
    }

    find(data) {
        let tmp = this._root;
        while (tmp != null) {
            if (tmp.data == data) {
                return tmp;
            } else {
                if (data > tmp.data) {
                    tmp = tmp.right;
                } else {
                    tmp = tmp.left;
                }
            }
        }
        return null;
    }

    remove(data) {
        let tmp = this.find(data);
        if (tmp != null) {
            let parent = this._root;
            while (true) {
                if (tmp == parent) {
                    break;
                } else if (tmp == parent.right) {
                    break;
                } else if (tmp == parent.left) {
                    break;
                } else if (tmp.data > parent.data) {
                    parent = parent.right;
                } else {
                    parent = parent.left;
                }
            }
            if (tmp.left === null && tmp.right === null) {
                if (tmp.data > parent.data) {
                    parent.right = null;
                } else {
                    parent.left = null;
                }
            } else if (tmp.left == null) {
                if (tmp.data > parent.data) {
                    parent.right = tmp.right;
                } else {
                    parent.left = tmp.right;
                }
            } else if (tmp.right == null) {
                if (tmp.data > parent.data) {
                    parent.right = tmp.left;
                } else {
                    parent.left = tmp.left;
                }
            } else {
                let tmp2 = tmp.right;
                while (tmp2.left != null) {
                    tmp2 = tmp2.left;
                }
                let n = tmp2.data;
                this.remove(tmp2.data);
                tmp.data = n;
            }
        }
    }

    min() {
        let tmp = this._root;
        while (tmp.left != null) {
            tmp = tmp.left;
        }
        return tmp.data;
    }

    max() {
        let tmp = this._root;
        while (tmp.right != null) {
            tmp = tmp.right;
        }
        return tmp.data;
    }
}

module.exports = {
    BinarySearchTree,
};

const tree = new BinarySearchTree();

tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(14);
tree.remove(8);
tree.remove(9);
console.log(tree.has(14), false);
console.log(tree.has(8), false);
console.log(tree.has(9), false);
console.log(tree.has(2), true);
console.log(tree.has(6), true);
console.log(tree.has(128), true);
console.log(tree.has(31), true);
console.log(tree.has(54), true);
console.log(tree.has(1), true);
