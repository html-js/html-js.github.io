::: code-group
<<< @/../packages/sth/src/dataTypes/typeOf.ts [源代码：手写 typeof]
```js [代码效果]
import { typeOf } from 'sth';

typeOf(2); // number
typeOf(true); // boolean

// 正确判断引用数据类型
typeOf([]); // array
typeOf({}); // object
typeOf(null); // null
typeOf(/a/); // regexp
```
:::