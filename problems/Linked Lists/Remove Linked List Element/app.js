var removeElements = function(head, val,target) {

  const dummy = new ListNode(-1); // Create a dummy node
  dummy.next = head;
  let prev = dummy;
  let curr = head;

  while (curr !== null) {
      if (curr.val === val) {
          prev.next = curr.next;
      } else {
          prev = curr;
      }
      curr = curr.next;
  }

  return dummy.next;
}
