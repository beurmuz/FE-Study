/**
 * Static Keyword
 *
 * NOTE:
 * 지금까지 모든 Property들은 객체(인스턴스)에 귀속되었었는데,
 * Static을 이용하면 class에 귀속되게끔 할 수 있다.
 */
class WannaGoCompany {
  name;
  company;

  // 공통적인 상태, 값을 지정하고 싶을 때.
  // static을 이용하면 인스턴스를 활용해 출력되지 않는다. (= 객체에 귀속되지 않음)
  static nowStatus = "취준생";

  constructor(name, company) {
    this.name = name;
    this.company = company;
  }

  static returnCompaction() {
    return `나는 2024년에 ${this.company}에 취업합니다!`; // this.company를 받아올 수 없다.
  }

  returnAnnounce() {
    return `나는 2024년에 반드시 ${this.company}에 취업할거라고!`;
  }
}

const beurmuz = new WannaGoCompany("Beurmuz", "LINE");
console.log(beurmuz); // WannaGoCompany { name: 'Beurmuz', company: 'LINE' }
console.log(beurmuz.returnAnnounce()); // 나는 2024년에 반드시 LINE에 취업할거라고!

// static을 사용하면 new 키워드로 생성한 인스턴스와는 관계없이 class에 귀속된다.
console.log(WannaGoCompany.nowStatus); // ⭐️ nowStatus는 class 자체에 귀속이 된다.
console.log(WannaGoCompany.returnCompaction()); // 나는 2024년에 undefined에 취업합니다!
console.log("-------------------------\n");

/**
 * factory constructor
 *
 * - 미리 템플릿화해서 정의할 수 있다.
 */
class Worker {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static fromObject(object) {
    return new Worker(object.name, object.age);
  }

  static fromList(list) {
    return new Worker(list[0], list[1]);
  }
}

// new 키워드 없이도 객체를 만들 수 있다.
const muse = Worker.fromObject({
  name: "beurmuz",
  age: 26,
});
console.log(muse); // Worker { name: 'beurmuz', age: 26 }

const muz = Worker.fromList(["young", 26]);
console.log(muz); // Worker { name: 'young', age: 26 }
