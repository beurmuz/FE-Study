/**
 * Immutable Object
 */

/**
 * 1. Extensible
 *
 * 확장이 가능한지 여부 설정하기
 * default 값은 true
 */
const beurmuz = {
  name: "Beurmuz",
  year: 1999,

  get age() {
    return new Date().getFullYear() - this.year + 1;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age + 1;
  },
};
console.log(beurmuz, "\n");

console.log(Object.isExtensible(beurmuz)); // true
beurmuz["company"] = "NAVER";
console.log(beurmuz);

// Extensible을 false로 설정하기
Object.preventExtensions(beurmuz);
console.log(Object.isExtensible(beurmuz)); // false
// 값 추가가 안됨
beurmuz["joinDate"] = 2024;
console.log(beurmuz);
// 단, 값 삭제는 됨
delete beurmuz["company"];
console.log(beurmuz, "\n");

/**
 * 2. Seal
 *
 * 밀봉, 봉인하는 것
 * default 값은 false
 *
 * ! 사실 Seal을 하는 것은 Configurable을 false로 만드는 것과 똑같음
 */

const muz = {
  name: "Muz",
  year: 1999,

  get age() {
    return new Date().getFullYear() - this.year + 1;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age + 1;
  },
};
console.log(muz, "\n");

console.log(Object.isSealed(muz)); // false

// 봉인해보기
Object.seal(muz);
console.log(Object.isSealed(muz)); // true
// 값 추가가 안된다.
muz["company"] = "LINE";
console.log(muz);
// 삭제도 안된다.
delete muz["name"];
console.log(muz);

// property attribute 바꿔보기 => 얘는 가능하다.
Object.defineProperty(muz, "name", {
  value: "이름바꿔봥",
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(muz, "name")); // configurable이 false가 되어있음
console.log(muz, "\n");

/**
 * 3. Freezed
 *
 * 동결시키기. 가장 높은 immutable성
 * ! 읽기 외에 모든 기능을 불가능하게 만든다.
 * writable까지도 false로 만드는 것
 */
const ryeong = {
  name: "Ryeong",
  year: 1999,

  get age() {
    return new Date().getFullYear() - this.year + 1;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age + 1;
  },
};
console.log(ryeong, "\n");

console.log(Object.isFrozen(ryeong)); // false
// 동결시키기
Object.freeze(ryeong);
console.log(Object.isFrozen(ryeong)); // true
// 값 추가가 불가능하다.
ryeong["company"] = "당근";
console.log(ryeong);
// 값 삭제도 안된다.
delete ryeong["name"];
console.log(ryeong);

// Property attribution은?
// value를 바꿀 수 없다. 아래 코드는 에러 발생
// Object.defineProperty(ryeong, "name", {
//   value: "이름 바꿧지롱",
// });
console.log(Object.getOwnPropertyDescriptor(ryeong, "name"));

/**
 * NOTE:
 * 중첩 객체를 freeze하면 어떻게 될까?
 *
 * 상위 object를 freeze했다고 해서, 하위 object까지 freeze되는 게 아니다.
 * (Extensible, Seal도 마찬가지이다.)
 */
const ducks = {
  name: "Ducks",
  year: 2023,
  juniorDuck: {
    name: "JuniorDuck",
    year: 2024,
  },
};
Object.freeze(ducks);
console.log(Object.isFrozen(ducks));
console.log(Object.isFrozen(ducks["juniorDuck"]));
