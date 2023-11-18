// 函数类型声明
type MySumFunction = (x: number, y: number, m?: number, z?: number) => number;

// 使用 function 关键字
let mySum: MySumFunction = function (x, y, m = 11, z = 0): number {
    return x + y + m + z;
};

// 使用箭头函数语法
const mySum1: MySumFunction = (x, y, m = 11, z = 0): number => {
    return x + y + m + z;
};

// 调用函数
let result1 = mySum1(3, 4);          // m 默认为 11，z 未提供，结果为 3 + 4 + 11 + 0 = 18
let result2 = mySum1(3, 4, 5);       // m 为 5，z 未提供，结果为 3 + 4 + 5 + 0 = 12
let result3 = mySum1(3, 4, 5, 6);    // m 为 5，z 为 6，结果为 3 + 4 + 5 + 6 = 18

// ---------------------sperator---------------------------

const add = (x: number, y: number) => { return x + y };
const add1 = (x: number, y: number) => x + y;
// console.log(add(1, 2));
// console.log(add1(1, 2));

//1.	使用 function 关键字：
const add2 = function (x: number, y: number) {
    return x + y;
};

//2.	具名函数表达式：
const add3 = function addFunction(x: number, y: number) {
    return x + y;
};

//3.	函数构造器：
const add4 = new Function('x', 'y', 'return x + y');

// 4.	立即执行函数表达式（IIFE）：
const add5 = (function (x: number, y: number) {
    return x + y;
})(3, 4);
// console.log(add5)

// 5.	函数包装器：
const add6 = ((x: number, y: number) => x + y).bind(null);

