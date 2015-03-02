function inOrder(node) {
 if (node !== null) {
   inOrder(node.left);
   write(node.show() + " ");
   inOrder(node.right);
   }
}

function preOrder(node) {
 if (node !== null) {
   write(node.show() + " ");
   preOrder(node.left);
   preOrder(node.right);
 }
}

function postOrder(node) {
 if (node !== null) {
   postOrder(node.left);
   postOrder(node.right);
   write(node.show() + " ");
 }
}
// this is where I find out how many nodes are in the tree
var count = 0;	
function numOfNodes(node) {
	if (node !== null) {
	  numOfNodes(node.left);
	  numOfNodes(node.right);
	  count++;
	  print('There are ' + count + ' nodes');
	}
}

