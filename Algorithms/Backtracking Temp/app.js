// function dfs(start_index, path):
//   if is_leaf(start_index):
//     report(path)
//     return
//   for edge in get_edges(start_index):
//     path.add(edge)
//     dfs(start_index + 1, path)
//     path.pop()



//More simple
function backtrack(res, choices, constraints, current) {
    // Goal: Check if the current solution is complete
    if (isGoalState(current)) {
        res.push([...current]);  // Store a copy of the current solution
        return;
    }

    // Choices: Iterate through all possible options
    for (let choice of choices) {
        // Constraints: Check if the choice is valid
        if (!isValid(choice, current, constraints)) continue;

        // Make a choice
        current.push(choice); // Add the choice to the current solution

        // Recurse: Explore further with the current choice
        backtrack(res, choices, constraints, current);

        // Undo the choice: Backtrack to explore other options
        current.pop(); // Remove the last choice from the current solution
    }
}

function isGoalState(current) {
    // Define the condition for a complete solution
    // Example: return current.length === targetLength;
}

function isValid(choice, current, constraints) {
    // Define the constraints for valid choices
    // Example: return !current.includes(choice); // For unique choices
}

function solveProblem(choices, constraints) {
    const res = [];                      // Result array to store all solutions
    const current = [];                  // Current solution being built
    backtrack(res, choices, constraints, current); // Start backtracking
    return res;                          // Return all found solutions
}

