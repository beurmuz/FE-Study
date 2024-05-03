/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10/ 2 % 3 스트링으로 변환해서
 * 반환받고 싶다면 어떻게 해야할까?
 */
console.log((((2 * 10) / 2) % 3).toString());
console.log((((3 * 10) / 2) % 3).toString());

/**
 * DRY
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */
function calculate() {
  console.log((((3 * 10) / 2) % 3).toString());
}
// calculate();

function calculate(number) {
  // Parameter
  console.log((((number * 10) / 2) % 3).toString());
}

/**
 * NOTE:
 *
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고한다.
 * 실제 입력하는 값은 argument라고 한다.
 * Parameter를 이용하면 함수의 재사용성을 높일 수 있다.
 */
calculate(4); // argument
calculate(5);

// 여러 개의 Parameter
function multiply(x, y) {
  console.log(x * y);
}
multiply(2, 4);

// NOTE: Default Parameter
function multiply(x, y = 10) {
  console.log(x * y);
}
multiply(2, 4);
multiply(2); // y를 넣어주지 않았지만 y가 10으로 정해져있어서 20이 출력된다.
console.log("---------------");

/**
 * NOTE: 반환받기
 * return 받기
 */
function multiply(x, y) {
  return x * y;
}

const result1 = multiply(2, 4);
console.log(result1); // 8

const result2 = multiply(4, 5);
console.log(result2); // 20

/**
 * Arrow 함수
 */
const multiply2 = (x, y) => {
  return x * y;
};
console.log(multiply2(3, 4));

const multiply3 = (x, y) => x * y;
console.log(multiply3(4, 5));

const multiply4 = (x) => x * 2;
console.log(multiply4(2));

// 함수를 리턴하고 리턴하고..
const multiply5 = (x) => (y) => (z) => `x: ${x} y: ${y} z:${z}`;
console.log(multiply5(2)(5)(7));

// multiply5 함수를 풀어 쓴 함수
function multiply6(x) {
  return function (y) {
    return function (z) {
      return `x: ${x} y: ${y} z:${z}`;
    };
  };
}
console.log(multiply6(3)(4)(5));

// 일반 함수를 Arrow 함수처럼 써보자!
const multiplyTwo = function (x, y) {
  return x * y;
};
console.log(multiplyTwo(4, 5));

const multiplyThree = function (x, y, z) {
  console.log(arguments); // ⭐️ 실제 입력된 값들을 출력해보자.
  return x * y * z;
};

console.log("-----------------");
console.log(multiplyThree(4, 5, 6));

const multiplyAll = function (...arguments) {
  return Object.values(arguments).reduce((a, b) => a * b, 1);
};

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

/**
 * immediately invoked function (즉시 실행 함수)
 *
 * 함수를 사용하려면 이름이 있어야 재사용이 가능하다.
 * 한번 실행하고 말 함수는 '()'로 묶어서 곧바로 argument에 값을 넣어 실행할 수 있다.
 */
(function (x, y) {
  console.log(x * y);
})(4, 5);

console.log(typeof multiply);
// NOTE: instanceof는 좌측에 있는게 오른쪽과 같은 타입인지를 질문하는 키워드
// 즉, multiply가 Object인가? 라는 질문
console.log(multiply instanceof Object); // true: 함수는 object임.
