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
 a linked Node is {
                    value: x,
                    next: anotherNode
                }
      so are by comparing the value of  the link, 
        then and the lowest to the newlist. 
            then add the next node with the next lowest value. 
                till the value is null.
 */
var mergeTwoLists = function(list1, list2){
    let output ={value:null,next:null}
    let current1 =list1
    let current2 =list2
    while(current !== null){
        output.value =  Math.min(current1.value,current2.value)
        if( output.value === list1.value){
            current1=list1.next
        } else {current2=list2.next}
    } 

};










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
/* [1,2,3,4,5]
 [1,2,3,4,5] [1,1,2,2,3,3,4,4,5,5]
 [1]
 [2,2,3] [1,2,2,3]
 [6]
 [-1,2,3] [-1,2,3,6]

 2 link list
 function ListNode(val,next){
    this.val = (val === undefined ? val)
    this.next = (next === undefined ? null : next)
 }
 return 1 link list
 if node1.val < node2.val 
    then return node1.val 
    and  set node1.val = node1.next
else 
    return node2.val 
    and set node2.val = node2.next

finally return to linklist
 *//*
var mergeTwoLists = function(list1, list2) {
    console.log(list1,list2)
    newNodeList = new ListNode(-1)
    let newNodeRoot = newNodeList
    while(list1 !== null && list2 !==null){
        //console.log("newNodeList",newNodeList,//"newNodeRoot",newNodeRoot         )
        if (list1.val < list2.val|| list2.val ===null){
            let temp = list1.val
            list1 = list1.next
            newNodeList.val =temp

        } else if (list1.val > list2.val|| list1.val === null){
            let temp = list2.val
            list2 = list2.next
            newNodeList.val =temp
        }
        console.log(list1.next,list2.next)
    //    newNodeList.next =  new ListNode()
    newNodeList = newNodeList.next
    console.log(newNodeRoot)
    }
    return newNodeRoot.next
};
*/
/*var mergeTwoLists = function (list1, list2) {
    let node = { val: -1, next: null };
    let iteratorNode = node;     
    while (list1 !== null && list2 !== null) {

        if (list1.val <= list2.val) {
            iteratorNode.next = list1
            list1 = list1.next;

        } else {
            iteratorNode.next = list2;
            list2 = list2.next;
        }
        iteratorNode = iteratorNode.next
    }
    if (list1 !== null) {
        iteratorNode.next = list1;
    } else {
        iteratorNode.next = list2;
    }
    // console.log("b list1", list1, list1 !== null, list2 !== null, (list1 !== null && list2 !== null))

    return node.next
};*/