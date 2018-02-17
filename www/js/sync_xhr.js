!function () {
  let xhr;

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }

  // 第三个参数设为 false 后，xhr 请求就会阻塞程序的运行
  xhr.open('GET', '/assets/data/hello_ajax.txt', false);
  xhr.send();

  // 如果是异步操作，这里的值为空字符串
  alert(xhr.responseText);
}.call();