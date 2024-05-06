/**
 * Getter and Setter
 */

class Skills {
  language;
  skill;

  constructor(language, skill) {
    this.language = language;
    this.skill = skill;
  }

  /**
   * Getter
   *
   * NOTE:
   * getter는 값을 가져올 때 쓴다.
   *
   * 함수를 정의하듯이 작성하면 되고,
   * 반드시 무엇인가를 반환해야 한다.
   *
   * getter의 역할
   * 1) 데이터를 가공해서 새로운 데이터를 반환할때
   * 2) private한 값을 반환할때
   */
  get saySkill() {
    return `${this.language} - ${this.skill}`;
  }

  /**
   * Setter
   *
   * setter는 값을 새로 저장할 때 쓴다.
   * 보통 바꾸고 싶은 property의 이름과 겹치게 많이 설정한다.
   *
   * 함수를 실행하듯 정의한다.
   */
  set setLanguage(language) {
    this.language = language; // property인 language을 의미한다.
  }
}

const a = new Skills("JavaScript", "상");
console.log(a);

// 1. Getter 사용하기
// getter를 함수처럼 입력했지만, 호출 시에는 하나의 변수처럼 (= object key값 처럼) 호출할 수 있다.
console.log(a.saySkill);
// console.log(a.saySkill()); // error 발생

// 2. Setter 사용하기
// TypeScript가 setLanguage의 파라미터로 들어간다.
a.setLanguage = "TypeScript";
console.log(a);
console.log("-------------------\n");

/**
 * Getter와 Setter는 언제 사용해야 할까?
 *
 * NOTE:
 * private 값에 접근할 때
 * - private 값은 외부에서 접근할 수 없는 값을 의미한다.
 *
 * getter는 가끔 사용하지만, setter는 사실 많이 쓸 일이 없다.
 */

class WannaGoCompany {
  #company; // private 값 선언
  positions;

  constructor(company, positions) {
    this.#company = company;
    this.positions = positions;
  }

  get company() {
    return this.#company;
  }

  set company(company) {
    this.#company = company;
  }
}

const line = new WannaGoCompany("LINE", "FE");
console.log(line); // WannaGoCompany { positions: 'FE' }
// NOTE: private 값은 그냥 가져올 수 없다. 가져오려면 getter를 이용하면 된다!
console.log(line.company);

// set Company를 이용하면 private property인 company의 값을 바꿀 수 있다.
line.company = "라인";
console.log(line.company);
