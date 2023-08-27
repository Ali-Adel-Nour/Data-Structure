var addTwoNumbers = function(l1, l2) {
  let carry = 0;
 let previousNode = new ListNode();
 const headNode = previousNode;
 while (l1 || l2 || carry) {
   let val1 = 0;
   let val2 = 0;
   if (l1) {
     val1 = l1.val;
     l1 = l1.next;
   }
   if (l2) {
     val2 = l2.val;
     l2 = l2.next;
   }
   const sum = val1 + val2 + carry;
   carry = Math.floor(sum / 10); // sum > 9 ? 1 : 0
   const digit = sum % 10;
   const currentNode = new ListNode(digit);
   previousNode.next = currentNode;
   previousNode = currentNode;
 }
 return headNode.next;
};


//other one
let sentinel = tail = new ListNode();

while (l1 || l2 || carry) {/* Time O(MAX(N, M)) */
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    const val = sum % 10;
    carry = Math.floor(sum / 10);

    tail.next = new ListNode(val);
    tail = tail.next;

    l1 = l1?.next || null;
    l2 = l2?.next || null;
}

return sentinel.next;
