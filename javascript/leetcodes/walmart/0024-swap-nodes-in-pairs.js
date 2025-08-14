/*24. Swap Nodes in Pairs
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)*/var swapPairs = function (head) {
    let dummy = new ListNode(0, null);
    dummy.next = head
    let readerNode = dummy
    while (readerNode?.next?.next) {
        nodeSwitch(readerNode);
        readerNode = readerNode?.next?.next;
    }
    return dummy.next
};
function nodeSwitch(readerNode) {
    let a = readerNode.next;
    let b = a.next;
    let c = b.next
    readerNode.next = b
    readerNode.next.next = a
    readerNode.next.next.next = c
}