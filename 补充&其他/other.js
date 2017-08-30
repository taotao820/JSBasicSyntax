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
 * 
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