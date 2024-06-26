---
reference:
  - title: 129. 求根节点到叶节点数字之和
    href: https://leetcode.cn/problems/sum-root-to-leaf-numbers
    site: 力扣（LeetCode）
---

# 129. 求根节点到叶节点数字之和

给你一个二叉树的根节点`root`，树中每个节点都存放有一个`0`到`9`之间的数字。<br/>
每条从根节点到叶节点的路径都代表一个数字：

例如，从根节点到叶节点的路径`1 -> 2 -> 3`表示数字`123`。<br/>
计算从根节点到叶节点生成的**所有数字之和**。

**叶节点**是指没有子节点的节点。

## 深度优先搜索

::: details 参考答案
```ts
function sumNumbers(root: TreeNode | null): number {
  function dfs(root: TreeNode | null, preSum: number): number {
    if (root === null) return 0;
    const num = preSum * 10 + root.val;
    if (root.left === null && root.right === null) {
      return num;
    } else {
      return dfs(root.left, num) + dfs(root.right, num);
    }
  }
  return dfs(root, 0);
};
```
:::

## 广度优先搜索

::: details 参考答案
```ts
function sumNumbers(root: TreeNode | null): number {
  if (root === null) return 0;
  let sum: number = 0;
  const queue: [TreeNode | null, number][] = [[root, root.val]];
  while (nodeQueue.length > 0) {
    const [node, preSum] = queue.shift();
    if (node.left === null && node.right === null) {
      sum += preSum;
    } else {
      if (node.left !== null) {
        nodeQueue.push(node.left);
        numQueue.push(preSum * 10 + node.left.val);
      }
      if (node.right !== null) {
        nodeQueue.push(node.right);
        numQueue.push(preSum * 10 + node.right.val);
      }
    }
  }
  return sum;
};
```
:::