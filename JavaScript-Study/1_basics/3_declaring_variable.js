/**
 * Variable 선언하기
 *
 * 1) var - 더이상 쓰지 않는다.
 * 2) let
 * 3) const
 */
var name = "beurmuz";
var age = 26;
console.log("name:", name);
console.log("age: ", age);

let KC = "SIK-K";
console.log(KC);

/**
 * NOTE: let과 var로 선언하면 값을 추후 변경할 수 있다.
 */
KC = "HAON";
console.log(KC); // HAON, 값이 변경됨

const DJ = "summit";
console.log(DJ);
// DJ = "AVIN";
// console.log(DJ);
/**
 * NOTE: const로 변수를 선언하면 선언한 변수의 값을 추후에 바꿀 수 없다.
 */


/**
 * NOTE: 선언과 할당
 * 
 * 1) 선언: 변수를 선언하는 것
 *    - var name;
 * 2) 할당: 변수에 값을 넣어주는 것
 *    - ✅ 변수를 선언만 하고, 할당하지 않을 경우 초깃값으로 undefined가 할당된다.
 *    - var name = 'beurmuz';
 */
var subjects = 'JS'; // 변수 선언과 동시에 할당을 하고 있는 코드
console.log(subjects); // JS

let favorite;
console.log(favorite); // undefined => 변수는 선언되었으나 정의되지 않았음을 의미

const hobby; // const는 값을 초기화하고 선언해야 한다고 경고를 알려줌.