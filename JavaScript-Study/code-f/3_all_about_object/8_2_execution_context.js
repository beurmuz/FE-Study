/**
 * NOTE:
 * Execution Context
 * : 실행하려는 JS코드, 코드를 실행할 때 필요한 정보를 담고있는 특수한 환경
 * => 즉, 코드 실행에 필요한 모든 데이터를 들고 있는 환경
 *
 * 크게 2가지 type으로 나뉜다.
 * 1) Global Context
 *   : 최상위 Execution Context.
 *   - 코드를 실행하면 무조건 생성되는 context
 *   - 웹에서의 window 객체나 node.js에서의 global 객체를 생성하고 들고있는다.
 *
 * 2) Function Context
 *   - 함수가 실행될 때마다 함수별로 실행되는 context.
 *   - 함수 실행에 대한 모든 정보를 갖고 있는다.
 *
 * 쉽게 말해 실행을 하게 되면 기본적으로 Global Context가 생성되고,
 * 그 다음에 함수를 실행할 때마다 각각 함수별로 Function Context가 생성된다.
 *
 *
 * NOTE:
 * Execution Context가 생성될 때 발생하는 일
 * 1. Creation Phase
 *  - Global Object를 생성한다.
 *  - window or global 객체가 생성되고, 함수에서는 arguments 객체가 생성된다.
 *  - this를 window 또는 global에 바인딩한다. (함수를 일반적으로 실행했을 경우)
 *  - 변수와 함수를 Memory Heap에 배정하고, 기본 값을 undefined로 저장한다. (호이스팅)
 *
 * 2. Execution Phase
 *  - 코드를 실행한다. (실제 실행이 일어나는 부분)
 *  - 필요하다면 새로운 Execution Context를 생성한다.
 *
 *
 * ⭐️⭐️⭐️ Q. 호이스팅이 일어나는 이유?
 * A. 실행 컨텍스트 스택은 creation phase가 먼저 일어나고, 이후 execution phase가 일어난다.
 * creation phase에서 미리 변수와 함수를 Memory heap에 배정하기 때문에
 * 이미 변수가 선언되어 있는 것 같은 호이스팅이 발생하는 것.
 *
 */

/**
 * Memory Heap과 Call Stack
 *
 * JavaScript는 싱글 스레드 프로그램이다. (스레드가 하나)
 * - 싱글 스레드 안에는 하나의 call stack(실행 컨텍스트 스택)과 memory heap이 존재한다.
 *
 * 1. Memory Heap
 *  : 메모리를 관리하는 공간
 *
 *
 * 2. Call Stack
 *  : 함수를 실행할때마다 stack에 올라가고, 끝날때마다 위에서부터 사라진다.
 */

