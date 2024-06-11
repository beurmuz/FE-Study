/**
 * NOTE:
 *
 * Async theory (비동기 이론)
 *
 * thread는 가장 작은 단위의 작업 단위.
 * 만약 '16 Thread' -> 동시에 작업할 수 있는게 16개라는 뜻
 * => 즉, thread가 몇개 있냐?라는 건 cpu가 동시에 몇개의 작업(연산)을 할 수 있냐는 뜻
 *
 * ⭐️ JavaScript는 Single Thread이다.
 * 그래서 어느 한 순간에 동시에 단 하나의 작업만 실행 할 수 있다.
 * 이러한 Single thread의 단점은 Async Programming으로 극복할 수 있다.
 */

/**
 * Sync Programming (동기 프로그래밍)
 *
 * - 모든 작업이 순차적으로 이루어진다. 앞의 작업이 끝나야만 뒤가 실행된다.
 */
function syncLongWork() {
  const now = new Date();

  // 시간을 밀리세컨으로 가져오는 법
  /**
   * milliseconds since epoch
   *
   * 1970년도 1월 1일 지금 코드가 실행되는 순간까지의 시간을 밀리초로 반환한다.
   */
  const milliseconds = now.getTime();
  const afterTowSec = milliseconds + 2 * 1000;

  // 2초 동안 하고싶은 작업
  while (new Date().getTime() < afterTowSec) {}
  console.log("완료");
}

// console.log("Hello");
// syncLongWork();
// console.log("World");

/**
 * 위의 코드는 Hello -> 2초 동안 longWork() -> World
 *
 * longWork를 실행하는 동안 스레드가 막혀있어 다른 작업들은 전부 이것이 끝나기를 기다리고 있는 것이다.
 * 이 시간동안 기다리고만 있으면 리소스가 낭비된다. 그래서 비동기가 필요한 것!
 */

function asyncLongWork() {
  setTimeout(() => {
    // setTimeout은 비동기로 실행되는 함수이다.
    console.log("완료");
  }, 2000); // 2초동안 기다렸다가 해당 함수가 실행된다.
}
console.log("Hello");
asyncLongWork();
console.log("World");

/**
 * 위의 코드는 Hello -> longWork() 실행 후 바로 World를 출력 -> longWork()작업이 끝난 후 World 출력
 *
 * 즉, 이렇게 되면 2초의 시간동안에도 스레드를 사용할 수 있게 되는 것이다.
 *
 *
 * NOTE:
 * 비동기 프로그래밍을 하면 싱글 스레드로 자바스크립트 런타임을 실행하더라도,
 * 효율적으로 스레드를 작업할 수 있게 된다.
 *
 * 효율은 어디서 나오냐?
 *
 * JS 엔진은 일반적으로 싱글 스레드이며,
 * 하나의 스레드에 Memory Heap과 Call Stack이 하나씩 있다.
 *
 * 일반적인 함수를 실행하게 되면 Call Stack에 하나씩 올라가고, 실행이 끝나면 Call Stack에서 사라진다.
 * 단, 비동기 함수의 경우 Call Stack에 올라갔다가
 * Event Loop에 의해 Task Queue(Event Queue)로 옮겨져 Call stack을 막지 않게 된다.
 *
 *
 * NOTE:
 *
 * Event Loop란?
 * : Event Loop는 JS 런타임이 생성되는 순간에 Event Loop라는 게 생성된다.
 *
 * Event Loop는 Task Queue를 계속 바라보면서 큐 안에서 실행이 종료된 함수가 있는지를 계속 확인한다.
 * 추가로 Call Stack이 비어 있는지도 함께 체크한다.
 * Queue에서 비동기 작업이 끝나면, 다시 Call Stack으로 이동한 후
 * 남은 동기 작업을 처리하고 종료된다.
 */
