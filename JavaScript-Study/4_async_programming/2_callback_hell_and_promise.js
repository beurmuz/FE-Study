/**
 * NOTE:
 *
 * Callback
 * : 특정 작업이 끝나고 다시 불리는 함수
 */

function waitAndRun() {
  setTimeout(() => {
    console.log("끝!");
  }, 2000);
}
// waitAndRun();

// callback 지옥 (좋지 못한 코드이다.)
function waitAndRun2() {
  setTimeout(() => {
    console.log("1번 콜백 끝");
    setTimeout(() => {
      console.log("2번 콜백 끝");
      setTimeout(() => {
        console.log("3번 콜백 끝");
      }, 2000);
    }, 2000);
  }, 2000);
}

// waitAndRun2();

/**
 * Promise
 */
const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("완료");
  }, 2000);
});

// timeoutPromise.then((res) => {
//   console.log(res); // Promise 객체를 반환받아 출력함
// });

// Promise 연결
const getPromise = (sec) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("완료");
    }, sec * 1000);
  });

// getPromise(2)
//   .then((res) => {
//     console.log("--- first then ---");
//     console.log(res);

//     return getPromise(2);
//   })
//   .then((res) => {
//     console.log("--- second then ---");
//     console.log(res);

//     return getPromise(2);
//   })
//   .then((res) => {
//     console.log("--- third then ---");
//     console.log(res);
//   });

// reject
const getProms = (sec) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("완료");
      if (sec < 1) {
        reject("에러 발생! 실행 시간이 너무 짧음");
      } else {
        resolve("제대로 실행 완료");
      }
    }, sec * 1000);
  });

// getProms(1)
//   .then((res) => {
//     console.log("올바르게 출력될 경우");
//   })
//   .catch((res) => {
//     console.log("에러가 발생한 경우");
//     console.log(res);
//   })
//   .finally(() => {
//     console.log("--- finally ---");
//   });

// 여러 개의 Promise를 동시에 실행하기
Promise.all([getProms(1), getProms(2), getProms(3)]).then((res) =>
  console.log(res)
);
