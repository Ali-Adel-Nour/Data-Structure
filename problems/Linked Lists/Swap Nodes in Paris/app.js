/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


var swapPairs = function(head) {

  if (head === null || head.next === null) {
      return head;
  }


  let newHead = head.next;


  head.next = swapPairs(newHead.next);
  newHead.next = head;


  return newHead;
};