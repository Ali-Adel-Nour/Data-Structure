
//https://leetcode.com/problems/snapshot-array/

//OOP
class SnapshotArray {
  constructor(n) {
      // set up histories so that each index has its own history
      this.histories = Array.from({ length: n }, () => [[-1, 0]]);
      this.snapId = 0;
  }

  set(index, val) {
      this.histories[index].push([this.snapId, val]);
  }

  snap() {
      this.snapId++;
      return this.snapId - 1;
  }

  get(index, snapId) {
      let left = 0, right = this.histories[index].length - 1, pos = -1;
      while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          if (this.histories[index][mid][0] <= snapId) {
              left = mid + 1;
              pos = mid;
          } else {
              right = mid - 1;
          }
      }
      return this.histories[index][pos][1];
  }
}



//Functional
function snapshotArray(length) {
  // Initialize the array and the history
  const array = new Array(length).fill(0);
  const histories = new Array(length).fill().map(() => [[0, 0]]);
  let snapId = 0;

  // Implement the required functions
  function set(index, val) {
      histories[index].push([snapId, val]);
      array[index] = val;
  }

  function snap() {
      snapId++;
      return snapId - 1;
  }

  function get(index, snapId) {
      let left = 0, right = histories[index].length - 1, pos = -1;
      while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          if (histories[index][mid][0] <= snapId) {
              left = mid + 1;
              pos = mid;
          } else {
              right = mid - 1;
          }
      }
      return histories[index][pos][1];
  }

  return {
      set,
      snap,
      get
  };
}