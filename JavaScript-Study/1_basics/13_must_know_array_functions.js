/**
 * Array Functions
 * - 기존 배열을 아예 수정시키는 methods
 * - 기존 배열의 변경 없이, 새로운 배열로 반환해주는 methods
 */
let wannaGoCompany = ["NAVER", "LINE", "DANGEUN", "SKT", "TOSS"];
console.log(wannaGoCompany);

// NOTE: 기존 배열에 변화를 주는 Methods
// push() - 직접 변경
console.log(wannaGoCompany.push("KAKAO")); // 요소 추가 후 배열의 길이를 return
console.log(wannaGoCompany); //
console.log("---------------");

// pop() - 맨 뒤를 제거
console.log(wannaGoCompany.pop()); // KAKAO
console.log(wannaGoCompany);
console.log("---------------");

// shift() - 맨 앞을 제거
console.log(wannaGoCompany.shift()); // NAVER
console.log(wannaGoCompany);

// unshift() - 맨 앞에 값을 추가
console.log(wannaGoCompany.unshift("NAVER")); // 추가 후 길이 출력
console.log(wannaGoCompany);
console.log("---------------");

// splice(삭제할 인덱스 번호, 삭제하고 싶은 개수)
console.log(wannaGoCompany.splice(0, 3));
console.log(wannaGoCompany); // splice후 남은 배열 값들을 반환

wannaGoCompany = ["NAVER", "LINE", "DAANGN", "SKT", "TOSS"];
console.log(wannaGoCompany);
console.log(`\nround 2, start!`);

// NOTE: 여기부터 기본 배열을 변경시키지 않는 Methods.
// concat() - 새로운 array를 만들어서 반환. 끝에 연결 or 추가 느낌
console.log(wannaGoCompany.concat("DONAMU"));
console.log(wannaGoCompany); // RIDI가 없음 => 기존 array의 변경이 없음

// slice(시작 인덱스, 끝 인덱스 + 1) - splice의 기존 array가 변경되지 않는 버전
console.log(wannaGoCompany.slice(0, 3));
console.log(wannaGoCompany);

// spread operator
let wannaGoCompany2 = [...wannaGoCompany];
console.log(wannaGoCompany2); // [...]

let wannaGoCompany3 = [wannaGoCompany];
console.log(wannaGoCompany3); // [[...]]
console.log("--------------");

let wannaGoCompany4 = wannaGoCompany;
console.log(wannaGoCompany4);
console.log(wannaGoCompany4 === wannaGoCompany); // true
console.log([...wannaGoCompany] === wannaGoCompany); // false
// => spread를 이용하면 완전히 새로운 배열이 리턴됨. 즉, 메모리 공간이 다르다는 뜻.

// join() - type: string
console.log(wannaGoCompany.join()); // default는 ','
console.log(wannaGoCompany.join("/"));
console.log(wannaGoCompany.join(", "));

// sort()
// 오름차순
wannaGoCompany.sort();
console.log(wannaGoCompany);
console.log(wannaGoCompany.reverse()); // 반대로 뒤집음

let numbers = [1, 9, 7, 5, 3];
console.log(numbers);

// NOTE:
// a, b를 비교했을때
// 1) a를 b 보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b 보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
  return a > b ? 1 : -1; // 오름차순 정렬
});
console.log(numbers);

numbers.sort((a, b) => (a > b ? -1 : 1)); // 내림차순 정렬
console.log(numbers);
console.log("--------------");

// map()
// NOTE: array의 모든 값들을 순회하면서 각각의 값을 변형시켜 return한다. (새 배열을 return)
console.log(wannaGoCompany.map((x) => x));
console.log(wannaGoCompany.map((x) => `가고 싶은 회사: ${x}`));

console.log(
  wannaGoCompany.map((x) => {
    if (x === "LINE") {
      return `🌈 제일 가고 싶은 회사는: ${x} 🌈`;
    } else {
      return x;
    }
  })
);
console.log(wannaGoCompany);

numbers = [1, 8, 7, 6, 3];

// filter()
// 조건이 참인 경우에만 해당 값을 반환
console.log(numbers.filter((x) => x % 2 === 0));

// find()
// 조건이 참인 ✅ 가장 첫번째 값만 ✅ 반환
console.log(numbers.find((x) => x % 2 === 0));

// findIndex()
// 조건이 참인 가장 첫번째 값의 index를 반환
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0)); 

// reduce() 퀴즈
// reduce() 함수를 사용해서 wannaGoCompany 변수에 있는 모든 스트링 값들의
// 길이를 더해서 반환하라.
// 참고로 string의 길이는 .length를 이용해서 구할 수 있다.
console.log(wannaGoCompany.reduce((p, n) => p + n.length, 0));
