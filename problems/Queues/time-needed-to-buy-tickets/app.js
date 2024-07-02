function timeRequiredToBuy(tickets, k) {
  let time = 0;
  let n = tickets.length;

  while (tickets[k] > 0) {
      for (let i = 0; i < n; i++) {
          if (tickets[i] > 0) {
              tickets[i]--;
              time++;


              if (tickets[k] === 0) {
                  break;
              }
          }
      }
  }

  return time;
}
