
/**
 * @description this
 * this在执行时才会确认，定义时无法确认（js不是编译型语言，是解释型语言）
 * 使用场景：
 * 1.作为构造函数执行
 * 2.作为对象属性执行
 * 3.作为普通函数执行 this=>window
 * 4.call apply bind
 * @author xuhuitao
 */
//代码演示
function Foo(){
    this={};
    this.name=name;
}