## 交换 a, b 的值，不能用临时变量

巧妙利用两个数的和、差。

```js
a = a + b // a = a + b
b = a - b // b = (a + b) - b
a = a - b // a = (a + b) - (a + b - b)
```
