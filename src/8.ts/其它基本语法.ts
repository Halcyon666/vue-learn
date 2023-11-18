/**
 * all content copy from <a href="https://www.jianshu.com/p/aa8f49ad05b3">source essay</a>
 */

type StringType = string;
let str: StringType;
str = 'hello';
// str = 123 // Error

type Name = 'ALisa' | 'Bob' | 'Cola'

// let name: Name = 'Alisa'; // Error 与 DOM 中的全局 window 对象下的 name 属性出现了重名
let name1: Name = 'ALisa'; // OK
let name2: Name = 'Bob'; // OK
let name3: Name = 'Cola'; // OK
// let name4: Name = '兔兔'; // Error


// 数字枚举
// enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
// console.log(Days.Sun) // 0
// console.log(Days.Mon) // 1
// 初始化枚举成员，那么该初始化成员后面的成员会在它的基础上自动增长1
enum Days { Sun = 1, Mon, Tue, Wed, Thu, Fri, Sat };
// console.log(Days.Sun) // 1
// console.log(Days.Mon) // 2

// 字符串枚举
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
// 异构枚举,枚举可以混合字符串和数字成员
enum Direction {
    name = '兔兔',
    age = 18
}

// ----------------------------------------------------
// 类
class Animal {
    // public 修饰符,类的属性、方法可以在外部访问
    public static age: number = 18;
    private static age1: number = 18;
    // 类的属性、方法不可以在外部访问
    private static title: string = '兔兔';
    // protected 修饰符,在派生类中仍然可以访问（继承中可以访问）
    protected title: string = '兔兔';
    constructor(public name: string, private age: number, public age1: number, protected sex: string) {
        this.age1 = age1;
    }
    sumAge() {
        return this.age1 + this.age
    }
}

Animal.age; // OK
const animal = new Animal('狗', 3, 4, 'male');
// 能否访问只跟构造方法的修饰符有关
// console.log(animal.age1) // 4
// console.log(animal.sumAge) // [Function: sumAge]
// console.log(animal.sumAge()) // 7
// console.log(animal.age) //Error
// Animal.title; // Error


abstract class Department {
    constructor(public name: string) {
    }
    printName(): void {
        console.log('Department name: ' + this.name);
    }
    abstract printMeeting(): void; // 必须在派生类中实现
}
class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }
    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
    generateReports(): void {
        console.log('Generating accounting reports...');
    }
    public static getInstance(): AccountingDepartment {
        return new AccountingDepartment();
    }
}

// department = new Department(); // Error: 不能创建一个抽象类的实例
const department: Department = AccountingDepartment.getInstance(); // OK：允许对一个抽象子类进行实例化和赋值
// console.log(department.name)
// department.printName(); // OK
// department.printMeeting(); // OK
// department.generateReports(); // Error: 方法在声明的抽象类中不存在

// 类型断言（Type Assertion）来进行向下类型转换
// (<AccountingDepartment>department).generateReports();// OK
// (department as AccountingDepartment).generateReports();// OK

// ----------------------------------------------------

// 接口
interface Age {
    age: number;
}

interface Title {
    title: string;
}

class title implements Title, Age {
    title: string = '兔兔';
    age: number = 18;
}


// 泛型函数
function identity<T>(arg: T): T {
    return arg;
}
identity<number>(1); // OK：明确的指定`T`是`number`类型
identity(1); // OK：让编译器自己推断类型

function loggingIdentity0<T>(arg: T): T {
    // 泛型约束,在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法。
    // console.log(arg.length); // Error
    return arg;
}

function loggingIdentity1<T>(arg: T[]): T[] {
    console.log(arg.length);  // OK
    return arg;
}

// 泛型接口
interface Person<T> {
    name: T;
    getAge(arg: T): T;
}

let myIdentity: Person<string> = {
    name: "兔兔",
    getAge(name) {
        return name
    }
};

// 泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
    constructor(zeroValue: T, add: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.add = add;
    }
}

// Instantiate with number type
const numberGeneric = new GenericNumber<number>(0, (x, y) => x + y);
// Call the add method
const result = numberGeneric.add(5, 10);
// console.log(result);  // Output: 15


// 泛型参数的默认类型
function createArray<T = string>(length: number, value: T): Array<T> {
    return Array(length).fill(value);
}
// Example usage:
const numberArray = createArray<number>(5, 42);
// console.log(numberArray);  // Output: [42, 42, 42, 42, 42]

const stringArray = createArray(3, "Hello");
// console.log(stringArray);  // Output: ["Hello", "Hello", "Hello"]

// -----------------------------------------------

// 类型守卫

// 定义一个联合类型
type Shape = Circle | Rectangle;

// 定义 Circle 类型
interface Circle {
    kind: "circle";
    radius: number;
}

// 定义 Rectangle 类型
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

// 类型守卫函数
function isCircle(shape: Shape): shape is Circle {
    return shape.kind === "circle";
}

// 使用类型守卫
function getArea(shape: Shape): number {
    if (isCircle(shape)) {
        // 在这里，TypeScript 知道 shape 是 Circle 类型
        return Math.PI * Math.pow(shape.radius, 2);
    } else {
        // 在这里，TypeScript 知道 shape 是 Rectangle 类型
        return shape.width * shape.height;
    }
}

// 示例使用
const circle: Circle = { kind: "circle", radius: 5 };
const rectangle: Rectangle = { kind: "rectangle", width: 4, height: 6 };

// console.log(getArea(circle));      // 输出：78.54
// console.log(getArea(rectangle));   // 输出：24
