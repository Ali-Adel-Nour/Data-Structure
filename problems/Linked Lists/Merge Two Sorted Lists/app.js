var mergeTwoLists = function(l1, l2) {
  var mergedHead = { val : -1, next : null },
      crt = mergedHead;
  while(l1 && l2) {
      if(l1.val > l2.val) {
          crt.next = l2;
          l2 = l2.next;
      } else {
          crt.next = l1;
          l1 = l1.next;
      }
      crt = crt.next;
  }
  crt.next = l1 || l2;

  return mergedHead.next;
};

//Recursive
/*var mergeTwoLists = function(l1, l2) {
  if(!l1 || !l2) return l1 || l2
  if(l1.val < l2.val){
      l1.next = mergeTwoLists(l1.next, l2)
      return l1
  }
  l2.next = mergeTwoLists(l1, l2.next)
  return l2

};
*/