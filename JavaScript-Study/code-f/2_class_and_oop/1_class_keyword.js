/**
 * Class basic
 *
 * 클래스는 객체지향 프로그래밍에서
 * 특정 객체(인스턴스)를 생성하기 위한
 * 변수와 메소드(함수)를 정의하는 '틀'이다.
 *
 * 객체: 실제 데이터를 구현한 것 (인스턴스화 한다~)
 * 클래스: 데이터 구현 시 쓰이는 일반화 된 정보를 정리해놓은 것
 *
 */

class Skills {
  // class안에 입력되는 것들을 'Property'라고 한다.
  language; // 1
  skill;

  // constructor (생성자)를 이용해서 입력받은 값을 저장할 수 있다.
  constructor(language, skill) {
    // 인자로 받는 language: 2
    // NOTE: this는 new 키워드를 이용해 생성되는 현재 인스턴스를 의미한다.
    this.language = language; // 3 => 3은 1이고, 1은 2이다.
    this.skill = skill;
  }

  // 메소드 정의하기
  saySkill() {
    return `${this.language}를 사용할 수 있고, 이해도는 '${this.skill}' 입니다.`;
  }
}

const skill0 = new Skills(); // 인자를 넘겨주지 않았으므로 undefined로 초기화된다.
console.log(skill0);

const skill1 = new Skills("JavaScript", "상");
console.log(skill1);

const skill2 = new Skills("React", "상");
console.log(skill2);

const skill3 = new Skills("TypeScript", "하");
console.log(skill3);
console.log("-------------\n");
// => 한번의 class 선언으로 많은 인스턴스를 찍어낼 수 있다.

// 객체처럼 사용할 수 있다. 그 예는 '.'을 이용해 Property에 접근 할 수 있다.
console.log(skill0.language);
console.log(skill1.skill);
console.log(skill2.language);
console.log(skill3.skill);
console.log("-------------\n");

// 메소드 실행
console.log(skill0.saySkill());
console.log(skill1.saySkill());
console.log(skill2.saySkill());
console.log(skill3.saySkill());
console.log("-------------\n");

/**
 * 신기한 JavaScript의 세상
 *
 * - JavaScript의 class 선언 시, property 작성은 옵셔널하다.
 * - ⭐️ 그래도 원활한 소통을 위해 Property를 선언하자..
 */
class Skillss {
  // ! Property를 생략해도 위와 똑같이 출력된다.
  // language;
  // skill;

  constructor(language, skill) {
    this.language = language;
    this.skill = skill;
  }

  saySkill() {
    return `${this.language}를 사용할 수 있고, 이해도는 '${this.skill}' 입니다.`;
  }
}

const skill4 = new Skillss("TypeScript", "상");
console.log(skill4);
console.log("-------------\n");

/**
 * NOTE: ⭐️⭐️⭐️ class의 type은 class일까?
 * => NO. 놀랍게도 함수이다.
 *
 * NOTE: ⭐️⭐️⭐️ class로 생성한 인스턴스는?
 * => object이다.
 */
console.log(typeof Skillss); // function
console.log(typeof skill4); // object
