// 콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;


// 함수를 인자로 받는 고차함수 calculator.
// 외부로부터 주어지는 함수.
// 함수를 정의하는 상태에서는 action이 정의되어있지 않지만, 특정한 일을 수행하는 action을 전달받음.
// 전달된 action은 콜백함수이다.
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라, 함수를 가리키고 있는 함수의 레퍼런스(참조값)만 외부로부터 전달받아서 action을 나중에 함수 안에서 호출함.
// 그래서 함수는 고차함수 안에서 필요한 순간에 호출이 나중에 됨.
function calculator(a, b, action) {
    if (a < 0 || b < 0) {
        return;
    }
    let result = action(a, b);
    console.log(result);
    return result;
}

// add라는 이름만 callback 함수 형태로 전달함. 실행(후출)하진않고 함수를 가리키는 주소만 전달한다.
// 같은 함수임에도, 어떤 계산을 하고싶냐에 따라 전달하는 콜백함수를 다르게 하여, 실행 함수가 달라질 수 있음.
calculator(1, 2, add);
calculator(1, 2, multiply);
// add 함수가 호출되지 않음.
    // 고차함수 내부에서 필요한 순간에, 호출하고 싶을 때 호출함.
    // 언제호출할지 모름. 나중에 돌아와. 나중에 호출해줘. 이런 느낌.
calculator(-1, -1, add);
console.log()