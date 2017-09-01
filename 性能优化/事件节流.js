/*
 * @Author: Xu.huitao 
 * @Date: 2017-09-01 11:08:22 
 * @Last Modified by:   Xu.huitao 
 * @Last Modified time: 2017-09-01 11:08:22 
 */
var textarea=document.getElementById("text");
var timeoutId;
textarea.addEventListener('keyup',function(){
    if(timeoutId){
        clearTimeout(timeoutId)
    }
    timeoutId=setTimeout(function(){
        //触发change事件

    },100)
})