var countStudents = function(students, sandwiches) {
  let queue = students.slice(); // Copy the students array to represent the queue
  let failedAttempts = 0;

  while (queue.length > 0 && failedAttempts < queue.length) {
      if (queue[0] === sandwiches[0]) {
          // The student likes the sandwich
          queue.shift();       // Remove the student from the front of the queue
          sandwiches.shift();  // Remove the sandwich from the top of the stack
          failedAttempts = 0;  // Reset failed attempts counter
      } else {
          // The student does not like the sandwich
          queue.push(queue.shift()); // Move the student to the end of the queue
          failedAttempts++;
      }
  }

  return queue.length; // The number of students left in the queue
};
