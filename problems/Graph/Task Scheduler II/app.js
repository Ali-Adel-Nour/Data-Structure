// Using MAP

var taskSchedulerII = function(tasks, space) {
  const lastExecution = new Map();
   let days = 0;

   for (const task of tasks) {
       days++;


       if (lastExecution.has(task) && days <= lastExecution.get(task) + space) {

           days = lastExecution.get(task) + space + 1;
       }


       lastExecution.set(task, days);
   }

   return days;
}


//Greedy
var taskSchedulerII = function (tasks, space) {
  let prevTime = {};
  let currTime = 0;
  for (let task of tasks) {
      if (currTime < prevTime[task] + space) {
          let breakTime = prevTime[task] + space - currTime + 1;
          currTime += breakTime;
      } else {
          currTime++;
      }
      prevTime[task] = currTime;
  }
  return currTime;
};


//Khan's Algorithm
function minDays(tasks, space) {
  const taskCount = {};
  for (const task of tasks) {
      taskCount[task] = (taskCount[task] || 0) + 1;
  }

  const maxHeap = [];
  for (const count of Object.values(taskCount)) {
      maxHeap.push(-count); // Use negative to simulate max heap
  }
  maxHeap.sort((a, b) => a - b); // Sort in descending order

  let days = 0;

  while (maxHeap.length > 0) {
      const cycle = [];
      const temp = [];

      // Process tasks for the current cycle
      for (let i = 0; i < space + 1; i++) {
          if (maxHeap.length > 0) {
              cycle.push(maxHeap.pop()); // Get the most frequent task
          }
      }

      // Decrease the count of tasks taken in this cycle
      for (const count of cycle) {
          if (count < -1) {
              temp.push(count + 1); // If still has remaining count, push back
          }
      }

      // Add remaining tasks back to the heap
      for (const count of temp) {
          maxHeap.push(count);
      }

      // Increment days by the number of tasks processed or idle time if no tasks left
      days += maxHeap.length > 0 ? (space + 1) : cycle.length;
  }

  return days;
}

