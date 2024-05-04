/**
 * Object / 객체
 *
 * NOTE: JavaScript의 숙련도를 결정하는 것이 바로 Object이다.
 *
 * object는 정의하고 싶은 값들을 성격이 비슷한 애들끼리 묶는 역할을 해준다.
 */

// key : value pair
let muse = {
  name: "beurmuz",
  work: "NAVER",
  introduce: function () {
    return `안녕하세요. ${this.work} Frontend 개발자 ${this.name} 입니다.`;
    // NOTE: this는 현재 객체를 가리킨다.
  },
};

console.log(muse);
console.log(muse.name); // 1
console.log(muse["name"]); // 2 => 1, 2는 똑같이 muse의 name을 출력한다.

const key = "name";
console.log(muse[key]); // muse['name']과 같다.

console.log(muse.introduce()); // ()로 함수를 실행해야 한다.
console.log("------------------\n");

// key, value
const nameKey = "name";
const nameValue = "beurmuz";

const workKey = "work";
const workValue = "NAVER";

const muse2 = {
  [nameKey]: nameValue, // key에다가 변수를 넣을 때: [변수]
  [workKey]: workValue,
  introduce: function () {
    return `${this.work} Frontend 개발자 ${this.name} 입니다.`;
  },
};
console.log(muse2);
console.log(muse2.introduce());
console.log("------------------\n");

// object의 값 바꾸기
muse2["work"] = "TOSS";
console.log(muse2);

// 존재하지 않는 property 넣기
muse2["originalName"] = "SeoRyeong";
console.log(muse2);

// delete로 key를 삭제하면 해당 value도 함께 삭제된다.
delete muse2["originalName"];
console.log(muse2);

/**
 * ! const로 선언한 객체의 특징
 *
 * NOTE:
 * 1) const로 선언할경우 객체 자체를 변경 할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */
const Muse = {
  name: "Seoryeong",
  work: "TOSS",
};
console.log(Muse);

// Muse = {}; // error 발생! 다른 객체로 변경이 안된다!

Muse["work"] = "LINE";
console.log(Muse);

/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(Muse));

/**
 * 모든 벨류값 다 가져오기
 */
console.log(Object.values(Muse));

const name = "muse";
// name의 key값과 value값이 같은 경우, name만 적어줘도 된다.
const Muse2 = {
  //   name: name,
  name, // ":"을 넣지 않으면 key가 string에 해당하는 값이, value에는 변수의 값이 들어감
};
console.log(Muse2);
