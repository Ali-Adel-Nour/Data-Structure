num_rows = grid.length;
num_cols = grid[0].length;
function get_neighbors(coord) {
    const [row, col] = coord;
    const delta_row = [-1, 0, 1, 0];
    const delta_col = [0, 1, 0, -1];
    const res = [];
    for (let i = 0; i < delta_row.length; i++) {
        neighbor_row = row + delta_row[i];
        neighbor_col = col + delta_col[i];
        if (0 <= neighbor_row && neighbor_row < num_rows &&
          0 <= neighbor_col && neighbor_col < num_cols) {
              res.push([neighbor_row, neighbor_col]);
          }
    }
    return res;
}



function bfs(starting_node) {
    const queue = [starting_node];
    const visited = new Set([starting_node]);
    while (queue.length > 0) {
        const node = queue.shift();
        for (const neighbor of get_neighbors(node)) {
            if (visited.has(neighbor)) continue;
            // Do stuff with the node if required
            // ...
            queue.push(neighbor);
            visited.add(neighbor);
        }
    }
}