var mergeTwoLists = function(list1, list2) {
    // Create a dummy node to simplify the merging process
    var dummyNode = { val: -1, next: null };
    var current = dummyNode;

    // Merge the two lists
    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }


    current.next = list1 || list2;


    return dummyNode.next;
  }

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