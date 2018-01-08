# 框架跨域通信

### 介绍
一个简单的框架跨域通信处理方案。兼容低版本浏览器。如果不考虑兼容IE8以下可以使用postMessage


demo
------------
子页面b.com嵌父框架a.com的跨域脚本cross.js

```js
<script src="http://a.com/cross.js"></script>
```

子页面通过crossCall调用父页面的方法

```js
crossCall('fathersay', {name: 'igo', text: '回家吃饭好拉'})

```

