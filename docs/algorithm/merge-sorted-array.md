---
reference:
  - title: 88. 合并两个有序数组
    href: https://leetcode.cn/problems/merge-sorted-array
    site: 力扣（LeetCode）
---

# 88. 合并两个有序数组

给你两个按**非递减顺序**排列的整数数组`nums1`和`nums2`，另有两个整数`m`和`n`，分别表示`nums1`和`nums2`中的元素数目。

请你**合并**`nums2`到`nums1`中，使合并后的数组同样按**非递减顺序**排列。

**注意**：最终，合并后数组不应由函数返回，而是存储在数组`nums1`中。为了应对这种情况，`nums1`的初始长度为`m`+`n`，其中前`m`个元素表示应合并的元素，后`n`个元素为`0`，应忽略。`nums2`的长度为`n`。

示例：

```js
输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] ，其中的 [1,2,,3] 为 nums1 中的元素。
```

::: info 解题思路
逆向双指针
- 定义两个指针 i 和 j，取值 m 和 n
- 每次循环时，比较两个指针所在数字大小
  - 把大的数字复制到 nums1 的最后一个空位上（即 i + j + 1）
  - 如果数字相等，优先用 nums2 的数字复制
  - 复制完成后，将其中一个指针减 1
:::

<script setup>
import Demo from './demos/88.vue';
</script>

::: info 动画演示
<Demo />
:::

::: details 参考答案
```ts
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // 定义双指针
  let i = m - 1;
  let j = n - 1;
  while (j >= 0 || i >= 0) {
    // 比较数字大小
    if (j < 0 || (i >= 0 && nums1[i] > nums2[j])) {
      // 如果 nums1[i] 大，将 nums1[i] 复制到 nums1 最后一个空位
      nums1[i + j + 1] = nums1[i];
      i--;
    } else {
      // 如果 nums2[j] 大，或相等，将 nums2[j] 复制到 nums1 最后一个空位
      nums1[i + j + 1] = nums2[j];
      j--;
    }
  }
};
```
:::
