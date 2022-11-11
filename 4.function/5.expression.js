// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
    // => 문 중에서도 값으로 평가될 숭 있는것.
    // 함수도 객체이기때문에 다른 객체에 할당하는 것이 가능.
    // 함수 생성, 선언, 무명함수(이름없는 함수), 변수에 할당한 add라는 이름으로 호출해야함.
let add = function (a, b) {
    return a + b;
};
console.log(add(1,2));

// 화살표 함수 const name = () => { }
    // 값만 반환하는 함수라면 function, return 키워드도 생략 가능.
    // add = (a, b) => a + b;
add = (a, b) => {
    return a + b;
};
console.log(add(1, 2));

// 생성자 함수 const object = new Function();   // 뒤 객체편에서 다룸
    // 함수 자체는 선언문이지만, 값으로 계산될 수 있는 표현식이다.



// IIFE (Immedicately-Invoked Function Expressions)
    // 괄호로 묶으면 값으로 변환이 됨. 함수의 주소를 호출하여 바로 실행함.
    // 함수를 선언하면서 바로 실행(호출)하는 표현식.
    // fromt-end에서 사용. 웹페이지가 로딩되면서 만든 함수를 즉각적으로 실행시킬 때 사용.
(function run() {
    console.log('🥰');
})();
