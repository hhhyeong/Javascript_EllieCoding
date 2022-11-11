// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨.
// 매개변수 기본값 Default Parameters a = 1, b = 1
function add(a = 1, b = 2) {
    return a+b;
}

function add(a, b) {
    console.log(a);
    console.log(b);
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a+b;
}

add();          // [Arguments] {}
add(1,2,3);     // [Arguments] { '0': 1, '1': 2, '2': 3 }
console.log(add(1,2,3));    // 3


// Rest 매개변수 Rest Parameters
function sum(...numbers) {          // 얼마나 많은 인자를 갖은 배열을 출력할지 모를때. 정해지지 않았을때.
    console.log(numbers);
}
sum(1,2,3,4,5,7,8);

function sum(a, b, ...numbers) {
    console.log(a);
    console.log(b);
    console.log(numbers);
}