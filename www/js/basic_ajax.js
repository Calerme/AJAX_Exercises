!function () {
  const button = document.getElementById('alert');

  button.onclick = () => {

    // 发起 AJAX 请求的步骤与通过浏览器打开一个网页的过程类似
    // 1. 新建一个 XMLHttpRequres 对象，类似于打开浏览器
    // 2. 使用 xhr.open 初始化参数，类似于在浏览器地址栏输入 URL
    // 3. 绑定 readystatechagne 事件回调，类似于浏览器等待响应
    let xhr;

    // 兼容 IE6 的写法
    // 另一种兼容写法是通过 if(window.XMLHttpRequres) 进行判断
    try {
      xhr = new XMLHttpRequest();
    } catch (e) {
      xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    xhr.onreadystatechange = () => {
      if ( xhr.readyState ===4 ) {
        if ( /^(2.*|304)/.test(xhr.status)) {
          alert(xhr.responseText);
        } else {
          cosole.error('请求错误', xhr.status);
        }
      }
    };

    xhr.open('GET', '/assets/data/hello_ajax.txt', true);
    xhr.send();

  };
}.call();