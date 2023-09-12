var rotateRight = function (head, k) {
    let tail = head;
    if (head === null) return head;
    let len = 1;
    while (tail.next) {
        tail = tail.next;
        len++;
    }
    tail.next = head;
    let count = len - (k % len);
    while (count > 0) {
        head = head.next;
        tail = tail.next;
        count--;
    }
    tail.next = null;
    return head;
};
