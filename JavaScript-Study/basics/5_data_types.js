/**
 * Data Types
 *
 * NOTE:
 * 총 7개로, 6개의 Primitive Type + 1개의 Object Type이 있다.
 *
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 *
 * 7) Object (객체)
 *    - Function
 *    - Array
 *    - Object
 */

/**
 * 1. Number 타입
 */
const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age); // number
console.log(typeof tempature); // number
console.log(typeof pi); // number
console.log("--------------");

const infinity = Infinity; // +무한대 값
const nInfinity = -Infinity; // -무한대 값

console.log(typeof infinity); // ✅ number
console.log(typeof nInfinity); // ✅ number
console.log("--------------");

/**
 * 2. String 타입
 * - 문자를 여러개(리스트)로 묶은 게 문자열
 */
const names = '"Beurmuz"';
console.log(names); // "Beurmuz"
console.log(typeof names); // string

const hobby = "'Dev' FE";
console.log(hobby); // 'Dev' FE

/**
 * ⭐️ Template Literal
 *
 * Escaping Character 대표적인 3개
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시'\'를 스트링으로 표현하고싶다면 두번 입력하면된다.
 */
const githubName = "Github\nBeurmuz";
console.log(githubName);
const githubEmail = "Github\tEmail";
console.log(githubEmail);
const backSlash = "Github\\Informaion";
console.log(backSlash);
const smallQutoation = "Github's Info";
console.log(smallQutoation);

const githubName2 = `Github Name '" /\ /\\ /
Beurmuz`;
console.log(githubName2);
console.log(typeof githubName2); // string

const positions = "FE";
console.log(positions + " beurmuz");
console.log(`${positions} beurmuz`);
console.log("-------------");

/**
 * 3. Boolean 타입
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue); // boolean
console.log(typeof isFalse); // boolean
console.log("-------------");

/**
 * 4. undefined
 *
 * ✅ 사용자가 직접 값을 초기화하지 않았을때 지정되는 값이다.
 * (= 선언만 하고 값을 할당하지 않았을 때 지정되는 값)
 *
 * 직접 undefined로 값을 초기화하는건 지양해야한다.
 */
// let noInit = undefined; // -> 이런거 절대 안한다.
let noInit;
console.log(noInit); // undefined
console.log(typeof noInit); // undefined
console.log("-------------");

/**
 * 5. null 타입
 *
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서의 ✅ null은 개발자가 명시적으로 없는 값으로 초기화할 때 사용된다.
 */
let init = null;
console.log(init); // null
console.log(typeof init); // ⭐️⭐️⭐️ object - 일종의 버그이다. 그러니 뭐라 설명할 수는 없다.
console.log("----------");

/**
 * 6. Symbol 타입
 *
 * 유일무이한 값을 생성할때 사용한다.
 * 다른 Primitive 값들과 다르게 Symbol 함수를 호출해서 사용한다.
 */
const test1 = "1";
const test2 = "1";

console.log(test1 === test2); // true

const symbol1 = Symbol("1");
const symbol2 = Symbol("1");

console.log(symbol1 === symbol2); // 같은 값을 선언한 것 같지만 출력 시 false가 나온다.

/**
 * 7. Object 타입
 *
 * Map
 * 키:벨류의 쌍으로 이루어져있다.
 * key:value
 */
const dictionary = {
  red: "빨간색",
  orange: "주황색",
  yellow: "노란색",
};

console.log(dictionary); // { red: '빨간색', orange: '주황색', yellow: '노란색' }
console.log(dictionary["red"]); // 빨간색
console.log(dictionary["orange"]); // 주황색
console.log(dictionary["yellow"]); // 노란색

console.log(typeof dictionary); // object

/**
 * Array 타입
 *
 * 값을 리스트로 나열 할 수 있는 타입이다.
 */
const fruitsArray = ["apple", "orange", "lemon", "grape", "watermelon"];
console.log(fruitsArray); // ['apple', 'orange', 'lemon', 'grape', 'watermelon']

/**
 * index
 *
 * 0부터 시작한다.
 * 1씩 올라갑니다.
 */
console.log(fruitsArray[0]); // apple
console.log(fruitsArray[fruitsArray.length]); // watermelon

fruitsArray[0] = "바보";
console.log(fruitsArray); // ['바보', 'orange', 'lemon', 'grape', 'watermelon']
console.log(typeof fruitsArray); // ⭐️⭐️⭐️ object

/**
 * NOTE:
 * static typing
 * - 변수를 선언할때 어떤 타입의 변수를 선언할지 명시한다.
 * - C
 *
 * dynamic typing
 * - 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 "⭐️추론⭐️"한다.
 * - JavaScript
 */
