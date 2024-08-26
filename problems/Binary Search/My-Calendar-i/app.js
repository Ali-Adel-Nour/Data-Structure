//https://leetcode.com/problems/my-calendar-i/



class MyCalendar {
  constructor() {
      this.calendar = [];
  }

  book(start, end) {
      let left = 0, right = this.calendar.length - 1, idx = this.calendar.length;

      while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          if (this.calendar[mid][0] > start) {
              idx = mid;
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      }

      // Check for overlap with the inserted event
      if ((idx > 0 && this.calendar[idx - 1][1] > start) ||
          (idx < this.calendar.length && this.calendar[idx][0] < end)) {
          return false;
      }

      this.calendar.splice(idx, 0, [start, end]);
      return true;
  }
}