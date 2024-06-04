/**
 * This
 *
 * ⭐️ JS는 Lexical Scope를 사용하기 때문에, 함수의 상위 스코프가 정의 시점에 평가된다.
 * 즉, 선언되는 부분에서 상위 스코프를 지정한다.
 *
 * ⭐️ 하지만 this 키워드는 객체가 생성되는 시점에 바인딩이 결정된다.
 */
const testFunction = function () {
  return this;
};
// console.log(testFunction()); // 일반함수로 함수 실행 시 this가 global object(window)에 매핑이 됨
console.log(testFunction() === global); // true

const muz = {
  name: "MUZ",
  age: 26,
  sayHello: function () {
    return `안녕하세요. ${this.name}입니다.`; // this: 현재 객체를 의미
  },
};
console.log(muz.sayHello()); // this가 muz객체에 매핑됨

function Person(name, year) {
  this.name = name;
  this.year = year;

  // 상위 레벨에 함수를 선언하면 this가 자동으로 실행하는 대상 객체로 매핑된다.
  this.sayHello = function () {
    return `안녕하세요. 저는 ${this.name}입니다.`;
  };
}
const muz2 = new Person("뮤즈", 1999);
console.log(muz2.sayHello()); // 실제 객체 muz2에 매핑됨

// Person.prototype.dev = function () {
//   return `${this.name}가 메뉴바를 개발합니다.`;
// };
// console.log(muz2.dev()); // Prototype에 함수를 정의해도 this 키워드는 실행하는 대상의 객체로 매핑이 된다.

Person.prototype.dev = function () {
  // 함수 안에 함수를 하나 더 정의했더니 갑자기 this가 undefined가 됨을 확인할 수 있다.
  function dev2() {
    return `${this.name}가 메뉴바를 개발합니다.`;
  }
  return dev2();
};
console.log(muz2.dev()); // undefined,

/**
 * NOTE: this 키워드가 어떤걸 가르키냐는 세가지만 기억하면 된다.
 *
 * 1) 일반 함수를 호출할 땐 this가 최상위 객체 (global 또는 window)를 가리킨다.
 * 2) 메서드로 호출할 땐 호출된 객체를 가리킨다.
 * 3) new 키워드를 사용해서 객체를 생성했을 땐, 객체를 가리킨다.
 *
 * => 2,3번의 경우가 아닌 경우, 모두 this가 global or window를 가리킨다.
 */

/**
 * NOTE: 원하는 this값으로 this를 매핑하는 방법
 *
 * 1) apply()
 * 2) call()
 * 3) bind()
 */
function returnName() {
  return this.name;
}
console.log(returnName()); // this는 global에 매핑된다.

const muz3 = {
  name: "Muse",
};
console.log(returnName.call(muz3)); // Muse, this 키워드가 muz3에 바인딩 됨
console.log(returnName.apply(muz3)); // Muse

/**
 * NOTE:
 * 1) call() => ','를 기반으로 아규먼트를 순서대로 넘겨주고
 * 2) apply() => 아규먼트를 리스트로 입력해야 한다.
 */
function multiply(x, y, z) {
  return `${this.name} / 결과값: ${x * y * z}`;
}
console.log(multiply.call(muz3, 3, 4, 5));
console.log(multiply.apply(muz3, [3, 4, 5]));

/**
 * NOTE:
 * 3) bind()
 * => call과 apply는 바인딩과 동시에 실행이 이루어지지만, bind는 this를 바인딩만 해놓고 나중에 실행할 수 있다.
 */
const laterFunc = multiply.bind(muz3, 3, 4, 5);
console.log(laterFunc); // bound는 bind가 됨을 의미. 즉, 바인드가 된 함수를 return
console.log(laterFunc());
