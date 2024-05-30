/**
 * Prototype
 */
// 빈 객체 선언
const testObj = {};
console.log(testObj.__proto__);

/**
 * NOTE:
 *
 * __proto__ 모든 객체에 존재하는 프로퍼티다.
 * class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값이다.
 *
 * Q. 어떻게 일반 Object에서 실행 가능할까?
 * A. class도 Object로 인스턴스화 되기 때문.
 *
 * Object가 가장 최상위 객체.
 * 그 아래에 클래스가 있고,
 * 그 아래에 클래스를 이용해 생성한 인스턴트들이 있다.
 * 이 모든 것들은 Object를 상속받은 것이다.
 */

// 생성자 함수 만들기 고!
function WorkerModel(name, company) {
  this.name = name;
  this.company = company;
}
console.log(WorkerModel.prototype); // {}

// console.dir(WorkerModel.prototype, {
//   showHidden: true, // 감춰진 값 보기
// });

// circular reference
// 서로가 서로를 참조하고 있는 상태.
console.log(WorkerModel.prototype.constructor === WorkerModel); // true
console.log(
  WorkerModel.prototype.constructor.prototype === WorkerModel.prototype
); // true

const muz = new WorkerModel("Muz", "당근");

console.log(muz.__proto__); // {}
console.log(muz.__proto__ === WorkerModel.prototype); // true
console.log(testObj.__proto__ === Object.prototype); // true

console.log(WorkerModel.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(WorkerModel.prototype.__proto__ === Object.prototype);

console.log(muz.toString());
console.log(Object.prototype.toString());

// ----------------------------------------------
function WorkerModel2(name, joinYear) {
  this.name = name;
  this.joinYear = joinDate;

  this.sayIntro = function () {
    return `${this.name}: 입사년도는 ${this.joinYear} 입니다.`;
  };
}
const muz2 = new WorkerModel2("Muz", 2024);
const ryeong2 = new WorkerModel2("Ryeong", 2024);

console.log(muz2.sayIntro());
console.log(ryeong2.sayIntro());
console.log(muz2.sayIntro === ryeong2.sayIntro); // false. sayIntro는 각각의 인스턴스에서 생성된 고유한 함수이다.

console.log(muz2.hasOwnProperty("sayIntro")); // true, muz2객체가 가진 고유한 프로퍼티.

// ----------------------------------------------
function WorkerModel3(name, joinYear) {
  this.name = name;
  this.joinYear = joinYear;
}

WorkerModel3.prototype.sayIntro = function () {
  return `${this.name}: 입사년도 - ${this.joinYear}`;
};

const muz3 = new WorkerModel3("Muz", 2024);
const ryeong3 = new WorkerModel3("Ryeong", 2024);

console.log(muz3.sayIntro === ryeong3.sayIntro); // true. sayIntro는 WorkerModel3 class의 메서드이다.
console.log(muz3.hasOwnProperty("sayIntro")); // false

WorkerModel3.sayStaticIntro = function () {
  return `이것은 static method 입니다.`;
};
console.log(WorkerModel3.sayStaticIntro());

/**
 * Overriding
 */
function WorkerModel4(name, joinYear) {
  this.name = name;
  this.joinYear = joinDate;

  this.sayIntro = function () {
    return `안녕하세요. 저는 인스턴스 메서드 입니다.`;
  };
}

WorkerModel4.prototype.sayIntro = function () {
  return `안녕하세요. 저는 prototype 메서드 입니다ㅎㅎ`;
};
const muz4 = new WorkerModel4("Muz", 1999);

// 프로퍼티 셰도잉 - class에서 override한 것과 똑같음
console.log(muz4.sayIntro());

/**
 * getPrototypeOf, setPrototypeOf
 *
 * 상속받는 클래스를 변경하는 것이 가능하다. (단, 인스턴스를 생성하고난 다음에 가능함)
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function TeamModel(teamName, nums) {
  this.teamName = teamName;
  this.nums = nums;
}

// prototype에 함수 추가하기
// prototype에 뭔가 추가해서 사용할 경우, 인스턴스를 만들 때 모두 상속받기 때문에 효율적인 관리가 가능하다.
TeamModel.prototype.sayTeam = function () {
  return `${this.teamName}: 총 ${this.nums} 명`;
};

function FETeamModel(teamName, nums) {
  this.teamName = teamName;
  this.nums = nums;

  this.sayFE = function () {
    return `안녕하세요. FE팀 ${this.teamName} 입니다.`;
  };
}

const naver = new TeamModel("naver", 100);
const lineFE = new FETeamModel("lineFE", 20);

console.log(naver.__proto__);
console.log(naver.__proto__ === TeamModel.prototype);
console.log(Object.getPrototypeOf(naver) === TeamModel.prototype); // true

console.log(naver.sayTeam()); // TeamModel에는 sayIntro가 없지만,
console.log(lineFE.sayFE()); // error
console.log(Object.getPrototypeOf(lineFE) === FETeamModel.prototype);
// console.log(lineFE.sayFE());

// 이미 생성된 객체의 상속 체인(prototype) 바꾸기
Object.setPrototypeOf(lineFE, TeamModel.prototype); // lineFE의 Prototype을 TeamModel.prototype으로 바꾸기
console.log(lineFE.sayFE()); // 실행됨

console.log(lineFE.constructor === FETeamModel); // false, 원래의 prototype과의 연결이 끊겨버림
console.log(lineFE.constructor === TeamModel); // true
console.log(naver.constructor === TeamModel); // true
console.log(Object.getPrototypeOf(lineFE) === FETeamModel.prototype); // false
console.log(Object.getPrototypeOf(lineFE) === TeamModel.prototype); //
console.log(FETeamModel.prototype === TeamModel.prototype); // false

// 함수 prototype 직접 변경
FETeamModel.prototype === TeamModel.prototype;

const toss = new FETeamModel("toss", 50);
console.log(Object.getPrototypeOf(toss) === FETeamModel.prototype); // true
console.log(FETeamModel.prototype === TeamModel.prototype); // 
