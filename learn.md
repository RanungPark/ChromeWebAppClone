- 자바스크립트에서 뛰어스기는 대문자로 한다
- 기본으로 const를 사용하요 변하고 싶을때 let을 사용한다 var은 쓰지 않는다

"text"
5
let a = 4;
const a = 5;
consol.log
parseInt를 하면 숫자인지 알수 있고 범위를 알수 있다
isNaN 불리언으로 return 해준다 숫자인지 아닌지 알려준다 숫자면 false 그외의 것이면 true

- document는 html을 가지고 온다 (객체이다)
- document.getElementById를 통하여 ID값이 가리키는 요소를 가지고 올수있다
- .dir은 전체 요소를 출력한다
- document.querySelector는 element 요소를 css방식으로 검색할수 있다 첫번째 요소만 가지고 온다
  모두 가자고 오고 싶다며면 querySelectorAll
- .dir에서 on이 앞에 있는것은 event로 사용할수있는것이다
- .className는 과거에 있던 클라스 까지 제거하고 현제의 클라스를 정정한다
- .classList는 classlist의 객체를 이용하여 수정할수있는데
  contains를 통해 class안에 classname이 있는지 확인할수있고
  add를 통해 추가 remove를 통해 제거를 할수있다(if-else문 동시에 사용)
  위와같은 행위는 toggle을 통해 한번에 할 수 있다
- placeholder와 value중 value가 선입력된다 place holder은 value가 입력되면 보이지 않는다 보통 paseword에서 사용된다
- form 안에 엔터를 누르고 input이 더 존재하지 않는다면 자동으로 submit된다
- .preventDefault event의 기본 행동이든지 발생되지 않도록 막는다
- form의 기본동작은 submit이다
- 링크의 기본동작은 클릭시 다른 페이지로 이동하는것
- 스트링만 표기된 문자는 대문자로만 표기한다
- 무언가를 저장하는 기능(유저 볼륨 등등)localStorage,sessionStorage,webSQL,indexedDB,Cookies