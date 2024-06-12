/**
 * NOTE:
 *
 * Async & Await
 *
 * await은 promise로 만든 함수에만 사용할 수 있다.
 */

const getPromise = (sec) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("작업 완료");
      //   reject("에러");
    }, sec * 1000);
  });

async function runner() {
  try {
    const result1 = await getPromise(1);
    console.log(result1);
    const result2 = await getPromise(1);
    console.log(result2);
    const result3 = await getPromise(1);
    console.log(result3);
  } catch (e) {
    console.log("--- 에러 발생 ---");
    console.log(e);
  } finally {
    console.log("--- 모든 작업 완료 ---");
  }
}
runner();
console.log("실행 끝");
