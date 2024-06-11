/**
 * NOTE:
 *
 * Closure
 *
 * : A closure is the combination of a function and
 *   the lexical environment within which that function was decalred
 *   (클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다.)
 *
 *  -> 쉽게 말해서, ⭐️"상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure라 한다."⭐️
 */

// function getNum() {
//   var num = 5;

//   function innerGetNum() {
//     return num; // 렉시컬 스코프에 의해 상위 스코프에서 num값을 가져올 수 있다.
//   }
//   return innerGetNum();
// }
// console.log(getNum());

// 상위 함수보다 하위 함수가 더 오래 살아있는 경우
function getNum() {
  var num = 3;

  function innerGetNum() {
    return num;
  }
  return innerGetNum;
}
const runner = getNum();
// innerGetNum을 실행하지 않고 함수 자체를 반환했기 때문에, 함수가 반환된다.
console.log(runner); // [Function: innerGetNum]
console.log(runner()); // runner를 실행하면 num이 출력되는 것을 알 수 있다.

/**
 * innerGetNum을 실행한 시점은 이미 getNum이 실행된 이후이다. 그 다음에 runner를 실행한 것이다.
 * 즉, 이미 getNum이 callStack에서 사라진 다음에 말이다.
 *
 * 이것이 바로 상위 함수보다 하위 함수가 오래 살아있는 경우이다.
 */

/**
 * NOTE:
 *
 * Closure는 어디서 사용할까?
 *  => 데이터 캐싱, 정보 은닉
 */

// ⭐️ 데이터 캐싱 예제 1번
// : 복잡하고 오래 걸리는 계산을 반복적으로 가져와야 하는 경우
function cacheFunction(newNumb) {
  // 아래 계산이 매우 오래 걸린다고 가정 했을 때, 이 계산을 함수를 호출할 때 마다 매번 계산해야한다.
  var number = 10 * 10;

  return number * newNumb;
}
console.log(cacheFunction(10));
console.log(cacheFunction(20));
console.log(cacheFunction(30));

// 위의 경우 cacheFunction 안에 closure를 만들면 된다.
function cacheFunction2(newNum) {
  // 해당 계산은 매우 오래 걸린다.
  var number = 10 * 10;

  function innerCacheFunction(newNum) {
    return number * newNum;
  }
  return innerCacheFunction;
}

const runner2 = cacheFunction2();
console.log(runner2(10)); // 1000
console.log(runner2(20)); // 2000
console.log(runner2(30)); // 3000
// 이렇게 되면 매우 오래 걸리는 연산이 함수가 호출될 때마다 실행되는 것이 아닌, 1번만 이루어진다.
// => 훨씬 더 효율적으로 함수를 작성할 수 있게 됨.

// -----------------------------
// ⭐️ 데이터 캐싱 예제 2번
// : 반복적으로 특정 값을 변경해야할 때 사용한다.
function cacheFunction3() {
  var number = 99;

  function increment() {
    number++;
    return number;
  }
  return increment;
}

const runner3 = cacheFunction3();
console.log(runner3()); // 100
console.log(runner3()); // 101
// 사실 외부에서 number에 접근할 수 있는 방법은 존재하지 않는데, increment는 그 number값을 기억하고 있어 이렇게 할 수 있다.

// ⭐️ 정보 은닉 예제
// : 옛날에는 private 대신 이렇게 정보 은닉을 했다.
function Student(name, age) {
  this.name = name;

  var _age = age; // this로 저장을 안했으므로 객체 생성시 age에 접근하지 못할 것

  this.sayNameYear = function () {
    return `안녕하세요. 저는 ${this.name}, ${_age}살 입니다.`;
  };
}

const muz = new Student("Muse", 26);
console.log(muz.sayNameYear());

console.log(muz._age); // undefined
console.log(muz.name); // Muse
