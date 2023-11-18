
let mySum01: (x: number, y: number, m: number, z?: number) => number =
    function (x: number, y: number, m: number, z?: number): number {
        // z = typeof z === 'number' ? z : 0
        return x + y + m + (z ?? 0);
    };

// console.log(mySum01(1, 2, 3, 4)) // 10
// console.log(mySum01(1, 2, 4)) // 7

let mySum11: (x: number, y: number, m: number, z?: number) => number =
    function (x: number, y: number, m: number = 11, z?: number): number {
        return x + y;
    };

// console.log(mySum11(1, 2, 3, 4)) // 3

function mySum21(x: number, y: number, m: number = 11, z?: number): number {
    return x + y + m + (z ?? 0);
}

// mySum21(3, 4);          // m 默认为 11，z 未提供，结果为 3 + 4 + 11 + 0 = 18
// mySum21(3, 4, 5);       // m 为 5，z 未提供，结果为 3 + 4 + 5 + 0 = 12
// mySum21(3, 4, 5, 6);    // m 为 5，z 为 6，结果为 3 + 4 + 5 + 6 = 18


