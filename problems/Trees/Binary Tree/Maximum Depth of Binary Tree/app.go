import (
	"fmt"
	"math"
)

func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}

	left := maxDepth(root.Left)
	right := maxDepth(root.Right)

	return int(math.Max(float64(left), float64(right))) + 1
}