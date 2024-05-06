/**
 * Inheritance (상속)
 *
 * NOTE:
 *
 * 상속은 객체들 간의 관계를 구축하는 방법.
 * 부모/슈퍼 클래스 등의 기존의 클래스로부터 속성과 동작을 상속받을 수 있다.
 */

// 부모/슈퍼 클래스 (parent/super class)
class Worker {
  name;
  company;

  constructor(name, company) {
    this.name = name;
    this.company = company;
  }

  sayCompany() {
    return `${this.name}'s company: ${this.company}`;
  }
}

// 자식 클래스 (child class)
// 자식 클래스는 부모 클래스의 method 뿐만 아니라 constructor도 상속받는다.
class FEWorker extends Worker {
  studyFE() {
    return `JS, TS, React ...`;
  }
}

// 자식 클래스 (child class)
class BEWorker extends Worker {
  studyBE() {
    return `Java, Spring, MySQL ...`;
  }
}

const beurmuz = new FEWorker("Beurmuz", "LINE");
console.log(beurmuz);

const muz = new BEWorker("Muz", "NAVER");
console.log(muz);

console.log(beurmuz.studyFE());
console.log(beurmuz.name);
console.log(beurmuz.company);
console.log(beurmuz.sayCompany(), "\n");

console.log(muz.studyBE());
console.log(muz.name);
console.log(muz.company);
console.log(muz.sayCompany());
console.log("--------------\n");

// 부모 클래스는 자식 클래스의 Property를 상속(이용)할 수는 없다.
const ryeong = new Worker("Ryeong", "TOSS");
console.log(ryeong);
console.log(ryeong.name);
console.log(ryeong.company, "\n");

console.log(beurmuz instanceof Worker); // beurmuz가 Worker의 instance이다: T
console.log(beurmuz instanceof FEWorker); // T
console.log(beurmuz instanceof BEWorker, "\n"); // F

console.log(muz instanceof Worker); // T
console.log(muz instanceof FEWorker); // F
console.log(muz instanceof BEWorker, "\n"); // T

console.log(ryeong instanceof Worker); // T
console.log(ryeong instanceof FEWorker); // F
console.log(ryeong instanceof BEWorker); // F
