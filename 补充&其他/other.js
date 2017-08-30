/**
 * @description 日期
 * @author xuhuitao
 */
function date(){
    Date.now();//获取当前时间毫秒数
    var dt=new Date();//获取当前时间
    dt.getTime();//获取毫秒数
    dt.getFullYear();
    dt.getMonth()+1;
    dt.getDate();
    dt.getHours();
    dt.getMinutes();
    dt.getSeconds();
}
date();

/**
 * @description 
 * 数组API：
 * forEach 遍历数组
 * every 判断某个元素是否都符合条件
 * some 判断某一个元素是否符合条件
 * sort 排序
 * map 对元素重新组装 生成新数组
 * filter 过滤
 * 以上这些数组方法是es5新增 如果要兼容ie低版本 请扩充原型方法 
 * 扩充数组原型方法：http://www.zhangxinxu.com/wordpress/2013/04/es5%E6%96%B0%E5%A2%9E%E6%95%B0%E7%BB%84%E6%96%B9%E6%B3%95/
 * @author xuhuitao
 */
function array(){
    //forEach
    var arr=[1,2,3];
    arr.forEach(function(item,index){
        console.log(item,index);
    });
    var result=arr.every(function(item,index){
        if(item<4){
            return true;
        }
    })
    console.log(result);//false 所有都会判断
    var result=arr.some(function(item,index){
        if(item<2){
            return true;
        }
    })
    console.log(result);//true 只要判断一个

    var arr2=arr.sort(function(a,b){
        return a-b;//从小到大排序 b-a 从大到小排序
    })
    console.log(arr2);//[1,2,3]
    //map...

    //filter
    var arr3=arr.filter(function(item,index){
        if(item>2){
            return true;
        }
    })
    console.log(arr3);//[2,3]

}
array();


/**
 * @description 对象
 * @author xuhuitao
 */
function obj(){
    var person={
        "name":"marry",
        "age":18,
        "sex":"female"
    }
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            console.log(obj[key])
        }
    }
}
//以下是具体例子
/**
 * @description 返回2017-08-30格式的日期
 * @author xuhuitao
 */
function formatDate(dt){
    if(!dt){
        dt=new Date();
    }
    var y=dt.getFullYear();
    var m=dt.getMonth()+1;
    var d=dt.getDate();
    if(m<10) m="0"+m;
    if(d<10) d="0"+d;
    return y+"-"+m+"-"+d;
}
var dt=new Date();
formatDate(dt);

/**
 * @description 写一个通用方法来遍历对象或者数组
 * @author xuhuitao
 */
function foreachArrOrObj(obj,fn){

}