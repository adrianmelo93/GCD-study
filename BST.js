class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
    inOrderTraversal(){
      if(this.left != null)this.left.inOrderTraversal();
      console.log(this.value);
      if(this.right != null) this.right.inOrderTraversal();
    }
}


class Tree {
    constructor() {
        this.root = null;
    }
    add(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return;
        }
        var currentNode = this.root,
            done = false;
        while (!done) {
            if (value < currentNode.value) {
                if (currentNode.left != null) currentNode = currentNode.left;
                else {
                    currentNode.left = new Node(value);
                    done = true;
                }
            } else {
                if (currentNode.right != null) currentNode = currentNode.right;
                else {
                    currentNode.right = new Node(value);
                    done = true;
                }
            }

        }
    }
    inOrderTraversal(){
      if(this.root === null)return null;
      this.root.inOrderTraversal();
    }
}


var t1 = new Tree();
t1.add(10);
t1.add(5);
t1.add(15);
t1.add(7);
t1.add(4);
t1.add(12);
t1.add(16);
console.log(t1);
