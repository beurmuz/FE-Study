/**
 * ! Property Attribute
 *
 * 1) 데이터 프로퍼티 - key, value로 형성된 실질적 값을 갖고 있는 프로퍼티
 * 2) 엑세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만,
 *                  다른 값을 가져오거나 설정할 때 호출되는 함수로
 *                  구성된 프로퍼티 ex) getter, setter
 *
 * NOTE:
 * 데이터 프로퍼티와 엑세서 프로퍼티를 구분하려면
 * 'Object.getOwnPropertyDescriptor()'를 이용해 검사해보면 된다.
 * value, writable가 있다면 데이터 프로퍼티,
 * value가 없고 get, set이 있다면 엑세서 프로퍼티이다.
 */

const beurmuz = {
  name: "Beurmuz",
  year: 99,
};

/**
 * 대문자로 시작하면 생성자 함수이거나 class의 이름.
 * 그리고 생성자 함수 or 클래스에 바로 '.'이 붙으면 'Static 함수'.
 */
console.log(Object.getOwnPropertyDescriptor(beurmuz, "year"));

/**
 * 1) value - 실제 프로퍼티 값
 * 2) writable - 값을 수정할 수 있는지 여부.
 *               false로 설정하면 프로퍼티 값을 수정할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부.
 *                 for ... in Loop 등을 사용할 수 있으면 true 반환.
 * 4) configurable: 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단.
 *                  false일 경우 프로퍼티 삭제 or 어트리뷰트 변경이 금지됨
 *                  !⭐️ 단, writable이 true인 경우에는 값 변경/writable을 변경하는 건 가능
 */
console.log(Object.getOwnPropertyDescriptor(beurmuz, "name"));

// 모든 프로퍼티들의 프로퍼티 attribute를 모두 출력하기
console.log(Object.getOwnPropertyDescriptors(beurmuz), "\n");

const muz = {
  // 데이터 property
  name: "Muz",
  year: 1999,

  // 엑세서 property
  get age() {
    return new Date().getFullYear() - this.year + 1;
  },
  set age(age) {
    this.year = new Date().getFullYear() - age + 1;
  },
};
console.log(muz);
console.log(muz.age, "\n");

muz.age = 29;
console.log(muz.age);
console.log(muz.year, "\n");

// getter/setter의 property attribute 출력하기
console.log(Object.getOwnPropertyDescriptor(muz, "age"));

/**
 * Property attribute를 재정의 하는 방법
 */

// 새로운 key와 value를 추가하던 원래 방법 - [], . 이용하기
muz.company = "LINE";
// muz["company"] = "LINE";
console.log(muz);
console.log(Object.getOwnPropertyDescriptor(muz, "company"), "\n");

// 만약 프로퍼티 attribute를 직접 설정하고 싶다면,
Object.defineProperty(muz, "joinYear", {
  value: "2024-상반기",
  // writable, enumerable, configurable를 설정하지 않으면 false가 default 값으로 들어간다.
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(muz);
console.log(Object.getOwnPropertyDescriptor(muz, "joinYear"));

/**
 * 1. Writable 값 바꿔보기
 */
// writable이 true면 값 변경 가능
muz.joinYear = "2024-하반기";
console.log(muz);

// writable을 false로 설정하고 값을 변경하려 한다면
Object.defineProperty(muz, "joinYear", {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(muz, "joinYear"));
muz.joinYear = "2024";
console.log(muz); // 에러는 발생하지 않으나 value를 변경할 수 없게 된다.

/**
 * 2. Enumerable 값 바꿔보기
 *
 * 열거를 할 수 있는지 여부를 알려주는 기능
 */

console.log(Object.keys(muz)); // [ 'name', 'year', 'age', 'company', 'joinYear' ]
for (let key in muz) {
  console.log(key);
}
console.log("\n");

// name key를 열거 불가능하게 설정 해주면
Object.defineProperty(muz, "name", {
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(muz, "name"));
// name key가 제외된 채로 출력된다.
console.log(Object.keys(muz));
console.log(muz);
// NOTE: Q. 그럼 name key가 아예 사라진 것인가? 그건 아니다.
// => 즉, 열거가 안될 뿐 key는 그대로 있다.
console.log(muz.name, "\n");

/**
 * 3. Configurable 값 바꿔보기
 *
 * NOTE:
 * configurable만 false로 설정하면 attribute 재정의, 값 변경이 불가능하나,
 * writable를 true로 함께 설정하면 값 변경이 가능해진다.
 */
Object.defineProperty(muz, "year", {
  writable: true,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(muz, "year"));

// 값 바꿔보기
Object.defineProperty(muz, "year", {
  value: 1999,
});
console.log(Object.getOwnPropertyDescriptor(muz, "year")); // 1999로 변경됨
Object.defineProperty(muz, "year", {
  writable: false,
}); // 단, 한번 false로 바꾸고 나면 writable을 다시 true로 바꿀 수 없다.
console.log(Object.getOwnPropertyDescriptor(muz, "year")); // writable이 false로 변경됨
