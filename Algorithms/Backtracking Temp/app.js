// function dfs(start_index, path):
//   if is_leaf(start_index):
//     report(path)
//     return
//   for edge in get_edges(start_index):
//     path.add(edge)
//     dfs(start_index + 1, path)
//     path.pop()