/**
 * Hoisting
 */
console.log("Hello");
console.log("World");
console.log("----------");
// 순서대로 출력된다.

// 선언 전에 출력부터 한다면?
// console.log(name); // undefined
// var name = 'beurmuz';
// console.log(name); // beurmuz

/**
 * Hoisting은 무엇인가?
 *
 * NOTE: 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */
// 마치 이런 느낌!
// var name;
// console.log(name);
// name = '코드팩토리';
// console.log(name);

/**
 * NOTE: ⭐️ let과 const도 Hoisting이 될까?
 * => 넵. 됩니다!
 *
 * 'ages'라는 변수를 선언하지 않고 접근부터 하면 'ages'가 아직 초기화되지 않았다고 에러가 발생한다.
 * 이는 변수가 호이스팅 되어 undefined로 배정이 되어 있는데, 아직 선언이 되어 있지 않아 접근할 수 없다고 말하는 것이다.
 * let으로 변수를 선언하면, 값이 초기화 되기 전에 값에 접근하는 것을 방지할 수 있다.
 */

console.log(ages); // ages가 정의되지 않았다.
// let ages = 26;

console.log(ages2); // ages가 정의되지 않았다.
// const ages2 = 27;
