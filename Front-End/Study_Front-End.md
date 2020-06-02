# Front-End 공부

## Basic

### 점진적 향상법(Progressive Enhancement)과 우아한 성능 저하법(Graceful Degradation)의 차이는?

- Answer

~~~
점진적 향상법
오래된 기기 혹은 낮은 버전의 브라우저에 맞추고, 여러 테스트를 통해 기능을 향상 시키는 방법이다.

우아한 성능 저하법 
최신 기술에 맞춘 후 오래된 기기 혹은 기술에서도 동작하도록 하기 위해 최적화 시키는 방법이다.
~~~

### 브라우저가 한 번에 1개의 도메인에서 내려받는 자원은 몇 개인가?

- Answer

~~~
브라우저마다 다르지만, 평균 6~8개의 리소스를 동시에 받을 수 있다.
~~~

### FOUC(Flash of Unstyled Content)이란?

- Answer

~~~
브라우저로 웹문서에 접근했을 때, CSS의 스타일이 모두 적용되지 못한 상태에서 화면이 표시되어 발생하는 화면 깜박임, 스타일의 적용 전과 적용 후가 그대로 화면에 노출된 상태로 변경되는 현상 등을 일컫는 말이다.
~~~

- Solution

~~~
<head> 요소 안에 CSS를 링크하고, @import의 사용을 자제한다.

자바스크립트의 선언 순서, 위치를 변경해본다.

FOUC를 유발하는 구역을 숨겼다가 문서의 스타일이나 스크립트가 모두 적용되면 보여준다.
~~~

### CSS 애니메이션과 JavaScript 애니메이션의 차이점은?

- Answer

~~~
CSS 애니메이션은 낮은 버전의 브라우저에서는 지원을 하지 않는 경우가 있다.

JavaScript에서는 CSS, 동작을 모두 관리해줘야하는 반면, CSS 애니메이션은 CSS안에서 모두 관리하기 때문에 관리에 용이하다.

대부분의 기본 애니메이션은 CSS 또는 자바스크립트로 만들 수 있지만 투자하는 노력과 시간이 다르다.
~~~

- TIP

~~~
UI 요소에 대해 작고 자체적으로 포함된 상태가 있는 경우 CSS를 사용한다.

애니메이션을 세밀하게 제어해야 하는 경우 자바스크립트를 사용한다.

전체 장면을 손으로 조정하려는 경우에는 requestAnimationFrame을 직접 사용한다.
~~~

### CORS는 무엇의 약자이고 어떤 문제에 대해서 언급하는 것인가?

- Answer

~~~
Cross Origin Resource Sharing의 약자이며, 다른 도메인에서 리소스를 공유할 수 있음을 의미한다. 

기본적으로 스크립트는 Same-Origin Policy에 의해 HTTP Request가 불가능하나 CORS를 허용하게 된다면 다른 도메인으로 HTTP Request가 가능해진다는 뜻이다. 
~~~

## HTML

### DOCTYPE은 무엇을 하는 것인가?

- Answer

~~~
document type의 약어로 버전 별로 지원하는 태그가 조금씩 다른 HTML이 어떤 버전으로 작성 되었는지 미리 선언해서 웹 브라우저가 내용을 올바르게 표시할 수 있도록 한다. 
~~~

### 표준 모드(Standard mode)와 호환 모드(Quirks mode)의 다른 점은?

- Answer

~~~
'하위 호환성을 유지하기 위해 현재 표준에 어긋나는 형식을 지원할 것인가'
혹은 '하위 호환성을 배재하고 현재 표준 형식만을 인정 하는가'의 차이를 보인다.
~~~

- TIP

~~~
IE 박스 모델 버그
- 호환 모드: width 계산 시, padding, border를 포함 한다.
- 표준 모드: width 계산 시, padding, border를 포함하지 않는다.

인라인 요소의 수직 정렬
- 호환 모드: 박스의 border botton에 맞추어 이미지를 정렬한다.
- 표준 모드: baseline에 맞추어 정렬된다.

table 안의 font size 상속
- 호환 모드: table 안에서 텍스트는 기본 font size를 상속하지 않는다.
- 표준 모드: table 안에서 텍스트는 기본 font size값을 상속한다..
~~~

~~~
표준 모드
HTML과 CSS 표준에 의해 웹 페이지가 표시된다.

호환 모드
오래된 브라우저의 행동을 모방하도독 만들어졌다.
~~~

### XML과 XHTML의 다른 점은?

- Answer

~~~
XHTML은 XML과 HTML을 결합하여 설계된 마크업 언어이다.

XML은 XHMTL에 대한 확장성을 제공하는 반면, XHTML 문서는 HTML과 달리 형식이 잘 맞아야 한다.

XML은 드라이버 하드웨어, 운영 체제 및 다양한 응용 프로그램 간 데이터를 전송하도록 설계된 마크업 언어이고, XHTML은 XML의 강점을 HTML과 결합하여 웹 페이지를 작성하는 데 깔끔하고 엄격한 마크업 언어를 제공합니다.
~~~

- TIP

~~~
XML(Extensible Markup Language)
HTML보다 웹 사이트 구축, 검색 기능이 향상되고 복잡한 데이터 처리를 쉽게 해준다.

XHTML(Extensible HyperText Mark-Up Language)
HTML이 좀 더 구조화된 형식이다.
HTML 보다 엄격한 문법을 가진다.
~~~

### 다국어가 포함된 페이지는 어떤식으로 제공 하는가?

- Answer

~~~
Encoding 방식과 문서에서 주로 사용하는 언어 설정을 해준다.
Box 모델링에 영향을 주는 경우도 있기에 CSS와 JS message set을 언어 형식에 맞게 분리 해야 한다.
~~~

### 쿠키(Cookies)와 세션 저장소(Session Storage)와 로컬 저장소(Local Storage)의 차이점은?

- Answer

~~~
쿠키
클라이언트에 대한 정보를 이용자 PC의 하드 디스크에 보관하기 위해서 웹 사이트에서 클라이언트의 웹 브라우저에 전송하는 정보이다.

세션 저장소
웹 스토리지의 종류 중 하나이다. 
세션이 종료될 때 즉, 웹브라우저를 닫을 경우 클라이언트에 대한 정보를 삭제한다.

로컬 저장소
웹 스토리지의 종류 중 하나이다. 
클라이언트에 대한 정보를 영구적(강제로 지우지 않는 이상)으로 보관한다.
~~~

## CSS

## JavaScript


## 코딩

### foo의 값은?

~~~js
var foo = 10 + '20';
~~~

- Answer

~~~
1020
~~~

### 아래 코드의 결과값은?

~~~js
console.log(0.1 + 0.2 == 0.3);
~~~

- Answer

~~~
false
~~~

### 아래 코드가 동작하려면?

~~~js
add(2, 5);
add(2),(5)
~~~

- Answer

~~~js
// add(2, 5)
function add(a, b) {
  return a + b;
}
~~~

~~~js
// add(2)(5)
function add(a) {
  return function (b) {
    return a + b;
  }
}
~~~

### 아래 구문의 반환값은?

~~~js
"i'm a lasagna hog".split("").reverse().join("");
~~~

- Answer

~~~
goh angasal a m'i
~~~

### window.foo의 값은?

~~~html
<script>
  (window.foo || (window.foo = "bar"));
</script>
~~~

- Answer

~~~
bar
~~~

### 아래 두 alert의 결과값은?

~~~html
<script>
  var foo = "Hello";
  (function() {
    var bar = " World";
    alert(foo + bar);
  })();
  alert(foo + bar);
</script>
~~~

- Answer

~~~
Hello World
Error
~~~

### foo.length의 값은?

~~~js
var foo = [];
foo.push(1);
foo.push(2);
~~~

- Answer

~~~
2
~~~

### foo.x 의 값은?

~~~js
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
~~~

- Answer

~~~
undefined
~~~

### 아래 코드의 출력값은?

~~~js
console.log('one')
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
~~~

- Answer

~~~
one
three
two
~~~