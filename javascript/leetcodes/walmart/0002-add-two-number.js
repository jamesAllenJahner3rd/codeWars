/**2. Add Two Numbers
 * 
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself. 
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * two linked list
 * each 6 - 5-4-3-2-1
 * return a list with  the sum of the numbers
 * So the question is should I make numbers from the linked list then add the two numbers and then turn that into a linked list or should I leave them in the linked list and do the second linked list one by one. The second one would probably be Take the longest time.

1 2 3 + 1 2 3 = 321 + 321 = 642 => 2 4 6
0 + 1 2 3 = 0 + 321 = 321 => 1 2 3 // different length link list

l1, l2, ReaderNode
l1Number, l2Number
sum, sumList 
first  read the l1 and save as l1Number , unshift? or toReversed()
 then transform from the array to string to number.
 then same to  l2
 add the numbers
 the  add to a string, array, reverse, to a link list
*/
//  * Today's LeetCode. My first walk through. and my mistakes.

// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. 

// The digits are stored in reverse order, and each of their nodes contains a single digit. 

// Add the two numbers and return the sum as a linked list.
var addTwoNumbers = function (l1, l2) {
  /*<<<<<<*/ function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
  } /*>>>>>>*/

  let reader = l1;
  let l1Array = [];
  while (reader !== null) {
    l1Array.push(reader.val);
    reader = reader.next;
  }

  l1Array.reverse();
  let l1Number = /*<<<<<<*/ BigInt(/*>>>>>>*/ l1Array.join("")); 

  reader = l2;
  let l2Array = [];
  while (reader !== null) {
    l2Array.push(reader.val);
    reader = reader.next;
  }

  l2Array.reverse();
  let l2Number = /*<<<<<<*/ BigInt(/*>>>>>>*/ l2Array.join(""));

  let sum = (l1Number + l2Number).toString();

  let sumLink = /*<<<<<<*/ new ListNode(0); /*>>>>>>*/ 
  reader = sumLink;

  for (let i = sum.length - 1; i >= 0; i--) {
    reader.next = /*<<<<<<*/ new ListNode(Number(sum[i])); /*>>>>>>*/
    reader = reader.next;
  }

  return sumLink.next;
};
//  *I was Using Number() instead of BigInt() Which was causing a type error. 
//  * Where I found out using console logs that the number was ginormous.
//  * Also I wasn't using the new ListNode(0). When I created sumLink I was making an object instead
//  *   {
//  *     val : 0,
//  *     next: null
//  * }
//  * This was also giving me a type error so I had to create the function ListNode()
