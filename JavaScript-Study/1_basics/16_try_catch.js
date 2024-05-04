/**
 * try...catch
 *
 * 에러를 잡을 때 사용한다
 *
 * 1) 발생시킬때 -> 던진다고한다. (throw)
 * 2) 명시적으로 인지할때 -> 잡는다고 한다. (catch)
 */
function runner() {
  try {
    console.log("Hello");

    // throw new Error("에러가 발생했습니다!"); // new: 새로운 객체를 생성함

    console.log("I'm beurmuz");
  } catch (e) {
    // 에러를 잡는다
    console.log("---catch---");
    console.log(e);
  } finally {
    // finally문은 항상 실행된다. 단, finally는 optional이다.
    console.log("---finally---");
  }
}
runner();
