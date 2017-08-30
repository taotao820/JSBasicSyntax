
/**
 * @description  js单线程 同步会阻塞代码运行 异步不会 用setTimeout来证明异步执行情况
 * @param 
 * @author xuhuitao
 */
function async(){
    console.log(1);
    setTimeout(function(){
        console.log(2);
    },2000);
    console.log(3);
    setTimeout(function(){
        console.log(4);
    },1000);
    console.log(5);
}
async();//1 3 5 4 2
