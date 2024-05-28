/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
 
public class Solution {
    public bool LeafSimilar(TreeNode root1, TreeNode root2) {
        List<int> sequence1 = new List<int>();
        List<int> sequence2 = new List<int>();
        DepthFirstSearch(root1, sequence1);
        DepthFirstSearch(root2, sequence2);

        if (sequence1.SequenceEqual(sequence2)) //LINQ SequenceEqual - .Equals will check for reference equality
        {
            return true;
        }
        return false;
    }

    public void DepthFirstSearch(TreeNode node, List<int> sequence)
    {
        if(node != null)
        {
            if(node.left == null && node.right == null)
            {
                sequence.Add(node.val);
            }
            DepthFirstSearch(node.left, sequence); //recursively call left & right sides of tree to check them both
            DepthFirstSearch(node.right, sequence);
        }
    }
}