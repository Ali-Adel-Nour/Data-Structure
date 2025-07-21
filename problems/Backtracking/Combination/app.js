function backtrack(res, choices, constraints, current, start) {
    if (isGoalState(current, constraints)) {
        res.push([...current]);
        return;
    }
    for (let i = start; i < choices.length; i++) {
        if (!isValid(choices[i], current, constraints)) continue;
        current.push(choices[i]);
        backtrack(res, choices, constraints, current, i + 1); 
        current.pop();
    }
}

function isGoalState(current, constraints) {
    return current.length === constraints.k;
}

function isValid(choice, current, constraints) {
  
    return true;
}

function combine(n, k) {
    const choices = Array.from({length: n}, (_, i) => i + 1);
    const constraints = { k };
    const res = [];
    backtrack(res, choices, constraints, [], 0);
    return res;
}