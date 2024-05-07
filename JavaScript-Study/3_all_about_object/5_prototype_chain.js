/**
 * Prototype
 */
const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티다.
// class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값이다.
console.log(testObj.__proto__);

function WorkerModel(name, company) {
  this.name = name;
  this.company = company;
}
console.log(WorkerModel.prototype);

// console.dir(WorkerModel.prototype, {
//   showHidden: true,
// });

// circular reference
console.log(WorkerModel.prototype.constructor === WorkerModel);
console.log(
  WorkerModel.prototype.constructor.prototype === WorkerModel.prototype
);

const muz = new WorkerModel("Muz", "당근");

console.log(muz.__proto__);
console.log(muz.__proto__ === WorkerModel.prototype);
console.log(testObj.__proto__ === Object.prototype);

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
console.log(muz2.sayIntro === ryeong2.sayIntro);

console.log(muz2.hasOwnProperty("sayIntro"));

// ----------------------------------------------
function WorkerModel3(name, joinYear) {
  this.name = name;
  this.joinYear = joinDate;

  this.sayIntro = function () {
    return `${this.name}: 입사년도 - ${this.joinYear}`;
  };
}
const muz3 = new WorkerModel3("Muz", 2024);
const ryeong3 = new WorkerModel3("Ryeong", 2024);

console.log(muz3.sayIntro === ryeong3.sayIntro);
console.log(muz3.hasOwnProperty("sayIntro"));

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

// 프로퍼티 셰도잉 - class에서 override
console.log(muz4.sayIntro());

/**
 * getPrototypeOf, setPrototypeOf
 *
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function TeamModel(teamName, nums) {
  this.teamName = teamName;
  this.nums = nums;
}

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
console.log(Object.getPrototypeOf(naver) === TeamModel.prototype);

console.log(naver.sayTeam());
console.log(lineFE.sayFE());
console.log(Object.getPrototypeOf(lineFE) === FETeamModel.prototype);
// console.log(lineFE.sayFE());

Object.setPrototypeOf(lineFE, TeamModel.prototype);
console.log(lineFE.sayFE());

console.log(lineFE.constructor === FETeamModel);
console.log(lineFE.constructor === TeamModel);
console.log(naver.constructor === TeamModel);
console.log(Object.getPrototypeOf(lineFE) === FETeamModel.prototype);
console.log(Object.getPrototypeOf(lineFE) === TeamModel.prototype);
console.log(FETeamModel.prototype === TeamModel.prototype);

FETeamModel.prototype === TeamModel.prototype;

const toss = new FETeamModel("toss", 50);
console.log(Object.getPrototypeOf(toss) === FETeamModel.prototype);
console.log(FETeamModel.prototype === TeamModel.prototype);
