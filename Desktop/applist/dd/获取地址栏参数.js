// 正常把地址栏参数转成对象格式
function getSearch() {
  var search = location.search;

  // 解码成中文
  search = decodeURI(search);

  search = search.slice(1);

  var arr = search.split("&");

  var obj = {};
  arr.forEach(function (v, i) {
    var key = v.split("=")[0];
    var value = v.split("=")[1];
    obj[key] = value;
  })

  return obj;
}

// 获取地址栏某个键的值
function getSearch(keywords) {
  var search = location.search;

  // 解码成中文
  search = decodeURI(search);

  search = search.slice(1);

  var arr = search.split("&");

  var obj = {};
  arr.forEach(function (v, i) {
    var key = v.split("=")[0];
    var value = v.split("=")[1];
    obj[key] = value;
  })

  return obj[keywords];
}