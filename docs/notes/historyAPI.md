# History API

## 개념

브라우저의 **window** 객체의 `history` 속성을 통해 사용자의 방문 기록을 확인할 수 있다.

## History Stack

History API가 호출될 때 기록을 Stack 형태로 저장하고 있는 저장소이다. 스택에 쌓이는 데이터는 `stateObj`에 대한 정보를 가지고 있다. 아래의 `pushState`, `replaceState`를 확인해보자.

## APIs

### history.forward(), history.back(), history.go(step)

-   뒤로 가기, 앞으로 가기에 대한 이벤트를 제어할 수 있다.

### history.pushState(stateObj, title, URL)

1. stateObj : History Stack에 쌓이는 데이터에 같이 저장되는 정보이다.
2. title : API 간 구분을 위한 매개변수이며, 브라우저에는 저장되지 않는다.
3. URL : 주소창에 표시하고자 하는 데이터이다.

```js
history.pushState({ name: 'sonny' }, '', '/sonny');
```

### history.replaceState(stateObj, title, URL)

-   pushState의 매개변수와 동일하다.
-   단, replaceState은 pushState와 달리, History stack을 pop 한 이후에 push를 진행한다. 즉, History Stack의 가장 최근의 상태를 변경하는 것이다. (그래서, 스택의 크기는 변하지 않음)

### window.onpopstate

-   History API에서 제공되는 API는 아니다.
-   뒤로 가기, 앞으로 가기 버튼을 클릭했을 때 발생하는 이벤트이다.
    -   단, History Stack의 처음에서 back, 끝에서 forward를 실행하면 이벤트가 발생되지 않는다.
-   event의 **state** 속성을 통해 **stateObj**을 접근할 수 있다.

```js
window.onpopstate = ({ event }) => {
    const { state } = event; // stateObj를 알 수 있음
};
```

### Ref.

-   https://developer.mozilla.org/ko/docs/Web/API/History_API
-   https://www.youtube.com/watch?v=Y1eHAE7D7s8
