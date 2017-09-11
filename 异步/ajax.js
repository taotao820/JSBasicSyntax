/**
 * @description 
 * XMLHttpRequest
 * 状态码说明
 * 跨域
 * 
 * @author xuhuitao
 */
//手动编写一个ajax
function ajaxPure(){
    var xhr=new XMLHttpRequest()
    xhr.open("GET","/api",false)
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){//readyState:0-未初始化 1-载入，已发送send方法正在发送请求 2-载入完成 send方法完成 3-交互 解析相应内容 4-完成 响应完成，可以在客户端调用
            if(xhr.status==200){//status 2xx   3xx:需要重定向 浏览器会直接跳转 4xx客户端请求错误找不到 5XX服务端错误 连接超时
                alert(xhr.responseText)
            }
        }
    }
    xhr.send(null);
}

/**
 * @description 
 * 跨域：
 * -浏览器有同源策略，不允许ajax访问其他域的接口
 * -http://www.baidu.com/news.html
 * 协议    域名         端口  有一个不同就算跨域
 * 可以跨域的三个标签
 * <img src=xxx>----用于打点统计，站长统计，统计网站可能是其他域
 * <link href=xxx>----可以使用CDN，CDN可以是其他域
 * <script src=xxx></script>----JSONP
 * JSONP:
 * 服务器可以根据请求，动态生成一个文件返回
 * 同理于
 * 
 * @author xuhuitao
 */
function xxx(){}