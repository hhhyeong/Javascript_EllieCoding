// 내장객체 살펴보기
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference
// 전역적으로 사용가능한 함수 확인 (오브젝트 통하지 않고 바로 접근 가능한 함수)
// this, globalThis는 전역을 가리키고, Node에서 this는 모듈을 가리키지만, JavaScript에서 대부분 전역을 가리킴.
// 브라우저에서 globalThis, this 출력하면 Window를 가리킴. (Window가 전역 객체임)
// 노드에서 this는 현재 모듈에 있는 정보을 출력함. 현재 모듈에 export된게 없기때문에 {} 출력
console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

// JavaScript를 한줄씩 값으로 표현하는 함수.
// 문자열이지만 JavaScript코드로 평가해서 출력.
eval("const num = 2; console.log(num)");
// 유한한지 확인하는 전역함수
console.log(isFinite(1));
console.log(isFinite(Infinity));

// 문자열을 Float형으로 변환
console.log(parseFloat("12.43"));
// 문자열을 정수로 변환
console.log(parseInt("12.43"));
console.log(parseInt("11"));

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야 함.
// 한글이나  특수문자는 이스케이프 처리 해야함.
// front-end 와 back-end 통신할 때 유용하게 사용.
const URL = "https://드림코딩.com";
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component이용
const part = "드림코딩.com";
console.log(encodeURIComponent(part));
