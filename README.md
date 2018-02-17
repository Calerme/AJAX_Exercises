# 简介

这是我进行强化练习 AJAX 的笔记。

# 目录

www/js/basic_ajax.js 是一个简单的 AJAX 请求示例。

www/js/sync_xhr.js 是一个阻塞 XHR 请求的示例。

# xhr.readyState 的 5 种值

* 0 初始化之前（调用 open 方法之前）
* 1 载入中（调用 send() 方法之后）
* 2 载入完成（send方法完成，并收到全部各应）
* 3 正在解析响应内容
* 4 响应内容解析完成，可以被客户端调用。

# xhr.onreadystatechagne

当 xhr.readyState 值改变时，触发该事件。

```
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    // 业务代码
  }
};
```

# xhr.status

服务器响应状态码。

```
if (/^2.*/.test(xhr.status)) {
  // 业务代码
} else {
  console.error('请求失败', xhr.status);
}
```