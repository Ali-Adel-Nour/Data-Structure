function leastInterval(tasks, n) {
  const taskCount = {};
  for (const task of tasks) {
      taskCount[task] = (taskCount[task] || 0) + 1;
  }

  const frequencies = Object.values(taskCount);
  frequencies.sort((a, b) => b - a);

  let time = 0;

  while (frequencies.length > 0) {
      const cycle = [];
      for (let i = 0; i < n + 1; i++) {
          if (frequencies.length > 0) {
              cycle.push(frequencies.shift());
          }
      }

      for (let count of cycle) {
          if (count > 1) {
              frequencies.push(count - 1);
          }
      }

      frequencies.sort((a, b) => b - a);
      time += frequencies.length > 0 ? (n + 1) : cycle.length;
  }

  return time;
}