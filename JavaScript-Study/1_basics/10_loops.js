/**
 * Loops
 *
 * 1) for
 * 2) while
 */
// 증가하는 반복문
for (let i = 0; i < 10; i++) {
  // (변수 선언; 조건; 취할 행동)
  console.log(i);
}
console.log("------------");

// 감소하는 반복문
for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("------------");

// 중첩 반복문
for (let i = 0; i < 3; i++) {
  for (let j = 3; j > 0; j--) {
    console.log(i, j);
  }
}

// *을 이용해서 6x6의 정사각형를 출력해라
let square = "";
let side = 6;

for (let i = 0; i < side; i++) {
  for (let j = 0; j < side; j++) {
    square += "*";
  }
  square += "\n";
}
console.log(square);
console.log("------------");

/**
 * for...in
 *
 * NOTE: index 값을 가져오고 싶을 때 사용한다.
 *
 * - object에서 사용 시 key 값을 반환 받을 수 있고
 * - array에서 사용 시 index 값을 반환 받을 수 있다
 */
const Muse = {
  name: "뮤즈",
  year: 1999,
  work: "Naver",
};

// object에서 사용 시 key: key값
for (let key in Muse) {
  console.log(`key is... ${key}`);
}

const wannaGoCompany = ["NAVER", "LINE", "DAANGN", "SKT", "TOSS"];

// array에서 사용 시 key: index
for (let key in wannaGoCompany) {
  console.log(`${key}: ${wannaGoCompany[key]}`);
}
console.log("------------");

/**
 * for...of
 *
 * NOTE: 값을 받아오고 싶을 때 사용한다.
 * 단, iterable 값에서만 사용할 수 있다.
 */
for (let value of wannaGoCompany) {
  console.log(`value: ${value}`);
}

/**
 * While
 *
 * NOTE: 괄호 속 조건이 false가 되는 순간 while문이 종료된다.
 */
let number = 0;

while (number < 10) {
  // (계속 loop를 실행할 조건을 넣는다.)
  number++;
}
console.log(number);

/**
 * do...while
 */
number = 0;

do {
  number++;
} while (number < 10);
console.log(number);
console.log("--------------");

/**
 * NOTE: while과 do-while의 차이?
 * => 조건의 판단 시점이 다르다.
 *
 * - while은 조건을 먼저 판단한 후에, 조건에 true가 반환이 되면 body를 실행시킨다.
 * - do-while은 먼저 body를 실행시킨 후에, 조건을 판단한다.
 */

/**
 * break
 */

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
console.log("-------------");

number = 0;

while (number < 10) {
  if (number === 5) {
    break;
  }

  number++;
  console.log(number);
}

/**
 * continue
 */
console.log("---------------");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

console.log("----------------");
number = 0;

while (number < 10) {
  number++;

  if (number === 5) {
    continue;
  }

  console.log(number);
}
