/**
 * @description js事件
 * 首先要搞清楚两个概念 事件冒泡和事件捕获
 * 冒泡：从里往外触发事件 （Dom树形结构）
 * 捕获：从外往里触发事件
 * 给dom元素增加监听，通用事件监听函数
 * @author xuhuitao
 */

//通用事件绑定
var btn = document.getElementById("btn1");
btn.addEventListener('click', function () {
    console.log('clicked');
})

//抽取公共函数
function eventListener(elem, type, fn) {
    elem.addEventListener(type, fn)
}
var a = document.getElementById("alink");
eventListener(a, 'click', function (e) {
    e.preventDefault(); //阻止浏览器默认行为
    console.log('clicked');
})

/**
 * @description IE低版本的兼容问题 
 * IE8及以下 使用attachEvent绑定事件和W3C标准不同 
 * @author xuhuitao
 */

