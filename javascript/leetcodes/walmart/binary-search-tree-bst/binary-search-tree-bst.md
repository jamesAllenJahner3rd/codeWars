Sure! A Binary Search Tree (BST) is a type of binary tree where each node follows this property:

The value of any node's left child is less than the value of the node itself.

The value of any node's right child is greater than the value of the node itself.

This structure allows for efficient searching, insertion, and deletion operations—each with an average time complexity of O(log n) when the tree is balanced.

Generic Binary Search Tree (BST) Algorithm
Search in a BST:

    Start at the root node.

    Compare the key to be searched with the current node's value:

        If the key is smaller, move to the left subtree.

        If the key is larger, move to the right subtree.

        If the key matches the current node, the search is successful.

    Repeat until the key is found or you reach a null/empty node.

Insert a Node:

    Start at the root and compare the key to be inserted with the current node:

        If the key is smaller, move to the left subtree.

        If the key is larger, move to the right subtree.

    Once you find an empty spot, insert the new key there as a new node.

Delete a Node:

    To delete a node, there are three cases:

        If the node is a leaf (no children), simply remove it.

        If the node has one child, replace it with its child.

        If the node has two children, replace it with its in-order successor (the smallest node in its right subtree) and recursively delete the successor.

In-order Traversal:

    To traverse a BST in sorted order:

        Recursively visit the left subtree.

        Visit the current node.

        Recursively visit the right subtree.