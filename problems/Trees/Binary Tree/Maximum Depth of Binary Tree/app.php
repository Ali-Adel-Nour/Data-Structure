<?php
function maxDepth($root) {
    if ($root === null) {
        return 0;
    }

    $left = maxDepth($root->left);
    $right = maxDepth($root->right);

    return max($left, $right) + 1;
}
?>