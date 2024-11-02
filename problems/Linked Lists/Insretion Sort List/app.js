var insertionSortList = function(head) {
  if (!head) return null;

  let sorted = null; // This will be the new sorted list

  let current = head; // Start with the head of the original list
  while (current) {
      // Insert current into the sorted list
      let next = current.next; // Store the next node
      sorted = insertIntoSortedList(sorted, current);
      current = next; // Move to the next node
  }

  return sorted;
};

// Helper function to insert a node into the sorted linked list
function insertIntoSortedList(sorted, node) {
  if (!sorted || sorted.val >= node.val) {
      node.next = sorted;
      return node;
  }

  let current = sorted;
  while (current.next && current.next.val < node.val) {
      current = current.next;
  }

  node.next = current.next;
  current.next = node;

  return sorted;
}