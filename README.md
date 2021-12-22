# Veact

> Vanilla JS + React = Veact

## Goal

최근 프로젝트에서 React를 통해 SPA를 경험했다.  
React, react-router를 이용하면서 상태관리, 라우팅을 쉽게 구현했지만 내부 동작은 알기 어려웠다.

그래서, Vanilla JS로 SPA를 구현해보고자 한다. 어려울 것 같다.. 일단 시작해보자!

**🔥🔥🔥🔥🔥🔥 Learning by doing🔥🔥🔥🔥🔥🔥**

## 상태 관리

우선 상태란 UI(View)에서 동작하는 방식을 결정하는 요소이다. 예를 들어, 체크박스가 선택 여부를 하나의 상태로 관리할 수 있다.

상태 관리를 위해서는 **3가지의 기능**이 필요하다.

1. Create: 최초에 상태를 지정할 수 있다.
2. Read: 현재 상태를 읽을 수 있다.
3. Update: 상태를 변경할 수 있다.

## Scripts

### build

> npm run build

### run

> npm run dev

## Check List

-   Component

    -   [ ] prop을 통해 부모 컴포넌트를 통해 부모 컴포넌트의 상태를 전달받을 수 있다.
    -   [ ] render 함수를 통해 상태에 따른 View를 표시한다.
    -   [ ] useState를 통해 상태를 구독하여 상태가 변경될 때 마다 render 함수가 호출된다.

-   useState

    -   [ ] 옵저버 패턴을 이용하여 상태를 관리하였다.
    -   [ ] 상태가 지역적으로 동작한다. (다른 지역상태에 영향 X)

-   useReducer
    -   [ ] flux 패턴을 이용하였다. (action,dispatch)
    -   [ ] 싱글톤으로 전역 store가 관리된다.
-   Build
    -   [ ] Webpack을 통해 빌드하였다.
    -   [ ] Babel을 통해 ES6+ 문법을 트랜스파일링하였다.
    -   [ ] core-js를 통해 promise, async, await 같은 문법을 폴리필 하였다.
-   SPA router
    -   [ ] 라우팅 과정에서 새로고침이 발생하지 않는다.
    -   [ ] 새로고침을 해도 현재 페이지가 유지된다.
-   httpRequest(optional)
    -   [ ] fetch 함수를 추상화하여 사용한다.
    -   [ ] async/await (then을 사용하지 않는다.)
    -   [ ] 응답의 요청/실패에 대한 UI처리를 수행한다.
-   util(optional)
    -   [ ] debounce, throttling
    -   [ ] functional programming(go, pipe, curry, filter)
