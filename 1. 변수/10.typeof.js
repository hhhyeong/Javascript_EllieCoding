// typeof : 데이터 타입을 확인
// JavaScript는 동적으로 실행할때 할당된 타입에따라 타입 결정됨
// 값을 타입 문자열로 반환
let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

// typeof : 데이터 타입을 확인
// 값을 타입 문자열로 반환
let variable;
console.log(typeof variable);

variable = 123;
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function() {};
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof '123');