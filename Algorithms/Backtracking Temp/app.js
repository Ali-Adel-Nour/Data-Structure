// function dfs(start_index, path):
//   if is_leaf(start_index):
//     report(path)
//     return
//   for edge in get_edges(start_index):
//     path.add(edge)
//     dfs(start_index + 1, path)
//     path.pop()



//More simple
function backtrack(currentIndex, path, additionalState) {
  // Base case: If a solution is found or valid stopping point
  if (isSolution(currentIndex, path, additionalState)) {
      reportSolution(path);
      return;
  }

  // Generate possible candidates (or edges) from the current position
  let candidates = getCandidates(currentIndex, path, additionalState);

  for (let candidate of candidates) {
      // Pruning: Skip candidates that are not valid or will lead to failure
      if (!isValid(candidate, path, additionalState)) {
          continue;
      }

      // Choose: Add the candidate to the path (current solution)
      path.push(candidate);

      // Optionally update any additional state (e.g., constraints, sum)
      updateState(candidate, additionalState);

      // Recur: Move to the next decision point
      backtrack(currentIndex + 1, path, additionalState);

      // Backtrack: Undo the candidate choice
      path.pop();

      // Optionally revert any additional state changes
      revertState(candidate, additionalState);
  }
}
