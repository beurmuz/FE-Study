/**
 * All about objects
 *
 * 객체를 선언할 때 사용할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - {}
 * 2) class를 인스턴스화해서 생성
 * 3) function을 이용해서 객체 생성 => "생성자 함수"
 */

// 1) object를 생성해서 객체 생성
const beurmuz1 = {
  name: "Beurmuz",
  year: 99,
};
console.log(beurmuz1);
console.log(`beurmuz1 Type: ${typeof beurmuz1}\n`); // 객체

// 2) class를 인스턴스화 해서 생성
class Worker {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const beurmuz2 = new Worker("Beurmuz", 99);
console.log(beurmuz2);
console.log(`beurmuz2 Type: ${typeof beurmuz2}\n`); // 객체

// 3) function을 이용해서 객체 생성 => "생성자 함수"
function WorkerFunction(name, year) {
  this.name = name;
  this.year = year;
}
// NOTE: function이지만 함수 내에서 this를 이용할 경우 new 키워드를 사용할 수 있다.
const beurmuz3 = new WorkerFunction("Beurmuz", 99); // 객체 생성
console.log(beurmuz3);
console.log(`beurmuz3 Type: ${typeof beurmuz3}\n`); // 객체
