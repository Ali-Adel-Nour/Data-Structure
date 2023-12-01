class Solution {
public:
    int maxDepth(TreeNode* root) {

        if (root == NULL) return 0;


        int left = maxDepth(root->left);
        int right = maxDepth(root->right);


        return std::max(left, right) + 1;
    }
};