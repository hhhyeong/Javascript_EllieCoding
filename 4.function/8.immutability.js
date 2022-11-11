// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 💩
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함.✨
// 원시값 - 값에 의한 복사 (copy by value)
// 객체값 - 참조에 의한 복사 (copy by reference) 
    // 값 자체가 아니라 메모리주소가 전달되므로 동일한 object를 가리키고 있기 때문에, 함수 내부에서 외부로부터 전달된 인자(obj)값을 변경하면 심각한 문제가 발생함.
function display(num) {
    num = 5;            // ❌ 함수의 인자로 들어오는 인자값을 재할당 ❌. 함수 내부에서는 인자값을 가지고 지지고볶고 하다가, 새로운 값을 return 해야함.
    console.log(num);
}

const value = 4;
// 인자에는 원시값 4가 전달됨.
display(value);
console.log(value);

function displatObj(obj) {
    obj.name = 'Bob';   // ❌❌❌❌❌ 외부로부터 주어진 인자(오브젝트)를 내부에서 변경 ❌
    console.log(obj);
}
const ellie = {name : 'Ellie'};
// 오브젝트의 값이 함수에 전달되는게 아니라, 참조값(메모리주소)이 전달되므로,
// 함수 안에서 오브젝트 값을 변경하면, 인자가 가리키는 실제 오브젝트를 변경시킴.
displatObj(ellie);
console.log(ellie);


// 2가지 수정 필요 !
// 1. 이름을 변경한다는 느낌으로 함수명 명시.
// 2. 반환할때는 새로운 오브젝트 맞들기!
function changeName(obj) {
    // 기존 오브젝트를 유지하면서, 새로운 오브젝트를 만들고 원하는것만 변경할수있음.
    return {...obj, name : 'Bob'};
}
const ellie2 = {name : 'Ellie2'};
changeName(ellie2);
console.log(changeName(ellie2));
console.log(ellie2);
