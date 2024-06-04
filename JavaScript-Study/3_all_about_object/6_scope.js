/**
 * Scope
 */
var n1 = 20;

function levelOne() {
  console.log(n1);
}
// levelOne(); // 20 -> 함수를 실행할 때에는 함수 밖에 있는 변수에 접근할 수 있다.

// 덮어쓰기
function levelOne() {
  var n1 = 40;

  console.log(n1);
}
levelOne(); // 40 -> 가장 가까운 곳, 가장 가까운 스코프에 있는 함수를 가져오기 때문에 40이 출력된다.

console.log(n1); // 20
console.log("--------------------------");

// 복잡한 함수 만들어보기
function levelOne() {
  var n1 = 40;

  function levelTwo() {
    var n2 = 99;

    console.log(`levelTwo: ${n2}`); // 99
    console.log(`levelOne: ${n1}`); // 40, 상위 스코프에 있는 n1이 출력됨
  }
  levelTwo();
  console.log(`levelOne: ${n1}`); // 40, 현재 같은 스코프에 있는 n1이 출력됨
}
levelOne();
// NOTE: 모든 선언은 가장 가까운 스코프에 있는 선언부터 활용한다.
console.log(n1); // 20, global scope
// console.log(n2); // error, 하위 스코프에는 접근할 수 없다.
console.log("--------------------------");

/**
 * JS -> ⭐️Lexical Scope⭐️
 * : 선언된 위치가 상위 스코프를 정한다.
 *
 * 이와 반대로 Dynamic Scope라는 것이 있다.
 * 이는 실행한 위치가 상위 스코프를 정한다는 것.
 *
 */
var n3 = 3;

function functionOne() {
  var n3 = 100;

  functionTwo();
}

function functionTwo() {
  // functionTwo는 global Scope에서 값을 가져옴 (Lexical Scope)
  console.log(n3); // Dynamic Scope였다면 100이 출력되었을 것
}
functionOne(); // 3
console.log("--------------------------");

/**
 * NOTE: var, let, const는 스코프를 어떻게 다르게 만들어줄까?
 * 
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.  
 */
// 1. var
var i = 999;

for (var i = 0; i < 5; i++) {
  // i가 재선언됨
  console.log(i);
}
console.log(`i in global scope: ${i}`); // 4, 함수만 새로운 스코프를 만들어낸다. for, if문 등 안에 있는 것들은 모두 같은 스코프.

// 2. let & const
i = 7;
for (let i = 0; i < 3; i++) {
  console.log(i);
}
console.log(`i in global scope: ${i}`); // 7, let과 const는 함수 레벨 스코프가 아닌 블록 레벨 스코프이다. 즉, for, if문 등도 스코프로 만들어낼 수 있다.
