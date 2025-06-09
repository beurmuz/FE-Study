// 1. number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// 2. string
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// 3. boolean
let bool1: boolean = true;
let bool2: boolean = false;

// 4. null
let null1: null = null;

// 5. undefined
let unde1: undefined = undefined;

// 생각해보기
// let numA: number = null; // tsconfig에서 strictNullCheck를 false로 두면 이렇게 쓸 수 있다.

// 단 하나의 값만 포함하는 리터럴(값)) 타입
// 값으로 만든 타입이 리터럴 타입. 즉, 값 자체가 type이 됨
// 리터럴타입은 원시타입에 포함되는 값 중 하나를 마치 타입처럼 사용할 수 있다.
let numA: 10 = 10; // 변수의 타입을 값 자체로 정의하면, 
numA = 12; // 10 외에 다른 값는 넣을 수 없음
let strA: 'hello' = "hello";
strA = 'A';
let boolA: true = true;
boolA = false;