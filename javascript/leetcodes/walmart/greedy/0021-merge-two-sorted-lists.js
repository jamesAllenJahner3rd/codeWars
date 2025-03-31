/**21. Merge Two Sorted Lists
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/
/**
 *parameters two linked list
 return one linked list
 */











/**
 * parameters, two listnodes
 * a  linksList splicing both lists
 * example { 'val': 1, next: { 'val': 1, "next": { 'val': 2, "next": { 'val': 3, 'next': { 'val': 4, 'next': { 'val': 4, 'next': null } } } } } }
 * if either list length is 0 skip them
 * for loop pass list 1 val, then next for val 2 then next for next 1 then next for next 2
 */
// var mergeTwoLists = function (list1, list2) {
//     // list1.length === 0? return list2.length === 0? {};
//     // if
//     let n =0
//     let listOutput = { }
//     while (list1.length >= n){
//         if (list1[n] ===undefined ) n return  n = list2{'val':}

//         n++
//     }
    
// }
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var mergeTwoLists = function(list1, list2) {
    let dummyNode = new ListNode(-1);
    let temp = dummyNode;

    let curr1 = list1, curr2 = list2;

    while (curr1 !== null && curr2 !== null) {
        if (curr1.val < curr2.val) {
            temp.next = curr1;
            curr1 = curr1.next;
        } else {
            temp.next = curr2;
            curr2 = curr2.next;
        }
        temp = temp.next;
    }

    // Attach the remaining nodes
    temp.next = curr1 !== null ? curr1 : curr2;

    return dummyNode.next;
};