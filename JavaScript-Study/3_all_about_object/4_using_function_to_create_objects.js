/**
 * Using function to create objects
 *
 * new 키워드 사용 시: new가 실행이 된 대상의 함수가 반환 됨
 * new 키워드 사용 안할 시: undefined가 반환 됨
 *
 */

function Worker(name, company) {
  //   console.log(this);
  //   console.log(new.target); // new keyword가 실행되었는지 검사하기
  if (!new.target) {
    // undefined일 때 생성자 함수를 반환해줌으로써 해결할 수 있다.
    return new Worker(name, company);
  }
  this.name = name;
  this.company = company;

  // 함수를 추가하는 방법
  this.sayName = function () {
    return `안녕하세요. ${this.name} 입니다.`;
  };
}
const muz = new Worker("Muz", "당근");
console.log(muz);
console.log(muz.sayName(), "\n");

// 함수형으로 실행해버리면 반환값이 없기 때문에 undefined가 출력된다.
// 하지마세용..
const muz2 = Worker("Muz2", "TOSS");
console.log(muz2, "\n"); // undefined

// new 키워드를 사용하지 않고 생성자 함수를 실행하면, this 키워드가 global에 붙어버린다.
console.log(global.name);
console.log(global.company);

/**
 * NOTE:
 * 화살표 함수로도 생성자 함수를 만들 수 있을까?
 * NO!!!!!!!
 * 
 * ! new 키워드는 일반 함수에서만 사용할 수 있다.
 */
const WorkerArrow = (name, company) => {
  this.name = name;
  this.company = company;
};

const beurmuz = new WorkerArrow("Beurmuz", "NAVER"); // error
