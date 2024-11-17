//https://leetcode.com/problems/count-complete-tree-nodes/
var countNodes = function(root) {
  if(root == null){
      return 0
  }

const queue = [root]
let count = 0

while(queue.length>0){
const levelSize = queue.length
let levelResult = []

for(let i =0 ; i<levelSize ; i++){
  const node = queue.shift()
  levelResult.push(node.val)
  count ++
  if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

}
return count
};