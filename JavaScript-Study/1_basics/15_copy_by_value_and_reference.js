/**
 * NOTE: 아주 아주 중요한 개념!
 *
 * copy by value 값에 의한 전달: (값을 그대로 복사)
 * copy by reference 참조에 의한 전달: ()
 *
 * ! 1) 기본적으로 모든 primitive 값은 copy by value다
 * ! 2) 객체는 copy by reference다
 */

// 1. copy by value
let original = "안녕하세요";
let clone = original;

console.log(original); // 안녕하세요
console.log(clone); // 안녕하세요

clone += " muse 입니다.";
console.log("--------------");
console.log(original); // 안녕하세요
console.log(clone); // 안녕하세요 muse 입니다.

// 2. copy by reference
let originalObj = {
  name: "muse",
  work: "LINE",
};
let cloneObj = originalObj; // 모두 같은 주소를 가리키고 있다.

console.log(originalObj); // { name: 'muse', work: 'LINE' }
console.log(cloneObj); // { name: 'muse', work: 'LINE' }

console.log("----------");

// NOTE: original만 바꿔줬는데 clone도 함께 바뀌었다!
originalObj["work"] = "TOSS"; // value 값 수정
console.log(originalObj); // { name: 'muse', work: 'TOSS' }
console.log(cloneObj); // { name: 'muse', work: 'TOSS' }

console.log(originalObj === cloneObj); // ! true
console.log(original === clone); // ! false

originalObj = {
  name: "beurmuz",
  work: "LINE",
};
cloneObj = {
  name: "beurmuz",
  work: "LINE",
};
console.log(originalObj === cloneObj); // false: 각 object의 값들이 같다고 해서 같은 obj인건 아니다.

console.log("---------------\n");
console.log("문제 풀어보기");

const muse1 = {
  name: "muz",
  work: "LINE",
};
const muse2 = muse1; // muse1과 같은 주소값
const muse3 = {
  name: "muz",
  work: "LINE",
};

console.log(muse1 === muse2); // true
console.log(muse1 === muse3); // false
console.log(muse2 === muse3); // false

/**
 * Spread Operator
 * - spread operator는 아예 새로운 값을 return한다.
 *   => 즉, spread operator는 ⭐️ copy by value ⭐️!
 * - ⭐️⭐️⭐️ 순서에 따라 값이 변할 수 있다.
 */
const muse4 = {
  ...muse3,
};
console.log(muse4);
console.log(muse4 === muse3); // false

const muse5 = {
  joinDate: 2024, // ⭐️ 새로운 key, value 추가
  ...muse3,
};
console.log(muse5); // { joinDate: 2024, name: 'muz', work: 'LINE' }

const muse6 = {
  name: "beurmuz", // ⭐️ spread 사용 전에 name을 썼으므로,
  ...muse3, // muse3에 있는 name으로 이름이 바뀜
};
console.log(muse6); // { name: 'muz', work: 'LINE' }

const muse7 = {
  ...muse3,
  name: "beurmuz", // ⭐️ spread 후 이름을 변경했으므로 name이 바뀐다.
};
console.log(muse7); // { name: 'beurmuz', work: 'LINE' }

const numbers = [1, 3, 5];
const numbers2 = [...numbers, 10];
console.log(numbers2); // [1, 3, 5, 10]
