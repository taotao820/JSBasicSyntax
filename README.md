# JSBasicSyntax
js 基础知识 疑难点 整理知识点
## typeof和instanceof区别
1. typeof只能判断变量和函数，判断数组和对象都会返回object，另外typeof null结果是object（boolean number string undefined function object）
2. instanceof 一般只用来判断数组和对象 返回true/false。判断基本变量会返回false

## 数组：
other.js中的数组api的方法都是es5规范添加的，如果要兼容ie低版本浏览器，需在Array原型上扩充，详细扩充请见该文章：http://www.zhangxinxu.com/wordpress/2013/04/es5%E6%96%B0%E5%A2%9E%E6%95%B0%E7%BB%84%E6%96%B9%E6%B3%95/
