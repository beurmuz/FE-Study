/**
 * NOTE:
 *
 * 타입 변환
 * Type Conversion
 *
 * 1) 명시적: 강제로 명령하는 느낌
 * 2) 암묵적: 슬쩍
 */
let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge); // string, 32

// 암묵적
let test = age + "";
console.log(typeof test, test); // string, 32
console.log("98" + 2); // 982
console.log(98 * 2); // 196
console.log("98" - 2); // 96
console.log("------------");

/**
 * 명시적 변환 몇가지 더 배우기
 */
console.log(typeof (99).toString(), (99).toString()); // string, 99
console.log(typeof true.toString(), true.toString()); // string, true
console.log(typeof Infinity.toString(), Infinity.toString()); // string, Infinity

// 숫자 타입으로 변환
console.log(typeof parseInt("0"), parseInt("0.99")); // number, 0
console.log(typeof parseFloat("0.99"), parseFloat("0.99")); // number, 0.99
console.log(typeof +"1", +"1"); // number, 1
console.log("-------------------");

/**
 * ⭐️⭐️⭐️ Boolean 타입으로의 변환
 *
 * ! string 안에 값이 들어 있는 경우: true
 * ! string 안에 아무 값도 없는 경우: false
 *
 * ! array나 object는 값이 들어 있든 말든 항상 true
 *
 */
console.log(!!"asdkfjhalksdfjasdfx"); // 부정의 부정이므로 true

console.log(!!""); // false

console.log(!!0); // false
console.log(!!"0"); // true
console.log(!!"false"); // true
console.log(!!false); // false
console.log(!!undefined); // ⭐️ false
console.log(!!null); // ⭐️ false

// object, array는 값이 들어있든 안들어있든 항상 true
console.log(!!{}); // true
console.log(!![]); // array

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 *
 * 모두 false를 반환한다.
 */
