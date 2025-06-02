/**
 * Super and Override
 *
 * NOTE:
 * Super는 부모 클래스를 의미한다.
 * 부모 클래스를 상속받은 자식 클래스에서,
 * 부모 클래스의 생성자를 그대로 사용하고 싶을 때 super()를 이용하면 된다.
 */

class Worker {
  name;
  company;

  constructor(name, company) {
    this.name = name;
    this.company = company;
  }

  sayCompany() {
    return `${this.name}'s Company: ${this.company}`;
  }
}

class FEWorker extends Worker {
  feSub1;
  feSub2;

  // 더 정의하기 (Override)
  // feSub1, feSub2를 다시 정의하면 된다.
  constructor(name, company, feSub1, feSub2) {
    super(name, company); // 부모 클래스의 constructor를 우선적으로 사용한다.
    this.feSub1 = feSub1;
    this.feSub2 = feSub2;
  }

  /**
   * 부모 클래스의 Property를 재정의하는 방법
   *
   * NOTE:
   *
   * 부모 클래스의 함수를 불러올 때는 super 키워드를 사용할 수 있다.
   *
   * ⭐️⭐️⭐️ 단, 변수값을 불러올 때는 super 키워드를 사용해서는 안된다.
   * - super.name (X),  super.company (X)
   */

  sayCompany() {
    // return `${super.sayCompany()}. 핵심 과목: ${this.feSub1}, ${this.feSub2}`;
    return `${this.name}'s Company: ${this.company}. 핵심 과목: ${this.feSub1}, ${this.feSub2}`;
  }
}

const beurmuz = new FEWorker("Beurmuz", "LINE", "JS", "TS");
console.log(beurmuz);

const muz = new Worker("Muz", "NAVER");
console.log(muz);

// 자식 클래스에서 정의한 Property는 부모 클래스에 영향을 미치지 않는다.
console.log(muz.sayCompany());
// 자식 클래스에서 정의한 Property는 해당 클래스로 생성한 instance에서만 쓸 수 있다.
console.log(beurmuz.sayCompany());
