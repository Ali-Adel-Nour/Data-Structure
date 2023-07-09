const LinkedList = require('./LinkedList');

test('append should add elements to the linked list', () => {
  const list = new LinkedList();
  list.append('a');
  list.append('b');
  list.append('c');

  expect(list.head.val).toBe('a');
  expect(list.head.next.val).toBe('b');
  expect(list.head.next.next.val).toBe('c');
});

test('contains should return true if an element exists in the linked list', () => {
  const list = new LinkedList();
  list.append('a');
  list.append('b');
  list.append('c');

  expect(list.contains('a')).toBe(true);
  expect(list.contains('c')).toBe(true);
});

test('contains should return false if an element does not exist in the linked list', () => {
  const list = new LinkedList();
  list.append('a');
  list.append('b');
  list.append('c');

  expect(list.contains('d')).toBe(false);
  expect(list.contains('z')).toBe(false);
});
