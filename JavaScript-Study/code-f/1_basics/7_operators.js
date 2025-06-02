/**
 * Operators
 *
 * 연산자
 */

/**
 * 산술 연산자
 *
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10); // 몫
console.log(10 % 10); // 나머지
console.log(10 % 3); // 나머지
console.log("-----------");

console.log(10 * (10 + 10)); // 괄호부터 연산한다.

/**
 * 증가와 감소
 */
let number = 1;

number++;
console.log(number);

number--;
console.log(number); // 1
console.log("---------");

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result); // 1

result = number++; // 후위 (대입 후 연산이 이루어짐)
console.log(result, number); // 1, 2

result = number--;
console.log(result, number); // 2, 1

result = ++number; // 전위
console.log(result, number); // 2, 2

result = --number;
console.log(result, number); // 1, 1

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게될까?
 */
let sample = "99";

console.log(+sample); // 99, string -> number
console.log(typeof +sample); // number

console.log(sample); // 99
console.log(typeof sample); // string

sample = true;
console.log(+sample); // 1, bool -> number
console.log(typeof +sample); // number

sample = false;
console.log(+sample); // 0, bool -> number
console.log(typeof +sample); // number

sample = "이름";
console.log(+sample);
// NaN -> Not a Number,숫자가 아님

sample = "99";
console.log(-sample); // -99
console.log(typeof -sample); // number

/**
 * 할당 연산자 (assignment operator)
 * - 계산한 다음에 값에 저장한다.
 */
number = 100;
console.log(number); // 100

number += 10;
console.log(number); //110

number -= 10;
console.log(number); // 100

number *= 10;
console.log(number); // 1000

number /= 10;
console.log(number); // 100

number %= 10;
console.log(number); // 0

/**
 * ⭐️⭐️⭐️ 비교 연산자
 *
 * 1) 값의 비교
 * 2) ⭐️ 값과 타입의 비교
 */

// 값만 비교 예시
console.log(5 == 5); // true
console.log(5 == "5"); // true
console.log(0 == ""); // true
console.log(true == 1); // true
console.log(false == 0); // true
console.log(true == "1"); // true

// 값과 타입의 모두 비교 예시
console.log(5 === 5); // true
console.log(5 === "5"); // false
console.log(0 === ""); // false
console.log(true === 1); // false
console.log(false === 0); // false
console.log(true === "1"); // false
console.log("------------");

// 값만 비교 예시
console.log(5 != 5); // false
console.log(5 != "5"); // false
console.log(0 != ""); // false
console.log(true != 1); // false
console.log(false != 0); // false
console.log(true != "1"); // false
console.log("-------------");

// 값과 타입의 모두 비교 예시
console.log(5 !== 5); // false
console.log(5 !== "5"); // true
console.log(0 !== ""); // true
console.log(true !== 1); // true
console.log(false !== 0); // true
console.log(true !== "1"); // true
console.log("------------");

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1); // true
console.log(100 < 1); // false
console.log(100 <= 1); // false
console.log(100 >= 1); // true

/**
 * 삼항 조건 연산자 (ternary operator)
 *
 * 조건 ? 조건이 참일때 실행 : 조건이 거짓일때 실행
 */
console.log(10 > 0 ? "10이 0보다 크다" : "10이 0보다 작다");

console.log("------------");
/**
 * 논리 연산자
 *
 * 1) && (and)
 * 2) || (or)
 */

// && 조건은 모두 true여야 true를 반환한다.
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log("------------");

// ||는 하나만 true여도 true를 반환한다.
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log("------------");

console.log(10 > 1 && 20 > 2); // true
console.log(10 < 1 && 20 > 2); // false
console.log(10 < 1 && 20 < 2); // false

console.log(10 > 1 || 20 > 2); // true
console.log(10 < 1 || 20 > 2); // true
console.log(10 < 1 || 20 < 2); // false
console.log("------------");

/**
 * 단축평가 (short circuit evaluation)
 *
 * NOTE: ⭐️ 암기 ⭐️
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 */

console.log(true || "문자"); // true
console.log(false || "문자"); // "문자"
console.log(false && "문자"); // false
console.log(true && "문자"); // "문자"

console.log(true && true && "문자"); // "문자"
console.log(true && false && "문자"); // "false"

/**
 * 지수 연산자
 */
console.log(2 ** 2); // 2^2 = 4
console.log(10 ** 3); // 10^3 = 1000

/**
 * null 연산자
 *
 * NOTE:
 * 1. null 값이나 undefined값이 들어가는 변수를 선언한다.
 * 2. 해당 변수 출력 시 undefined가 출력됨
 */
let name;
console.log(name); // undefined

name = name ?? "beurmuz"; // 좌측값이 undefined이거나 null이면 우측 값을 반환
console.log(name); // beurmuz

name = name ?? "이름"; // 좌측 값이 null이나 undefined가 아니므로 좌측 값이 ture가 됨.
console.log(name); // beurmuz

// NOTE: null 연산자를 한번에 작성하는 법
let name2;
name2 ??= "beurmuz";
console.log(name2);
