// 객체 만드는 방법
// Object literal {key : value}         중괄호를 이용해서 key, value 만들기
// new Object()                         Object라는 클래스 이용하기.
// Object.craete();                     Object 안의 craete()함수 이용하기.
// key   - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)
let apple = {
    name: 'apple',
    helloBye : '✋',
    'hello' : '✋',
    'hello-bye' : '✋',                 // key에 문자열을 사용하면 특수문자 사용 가능.
    0 : 1,
    ['hello-bye1'] : '✋',
};

// 속성, 데이터에 접근하기 위해서는
console.log(apple.name);                // 마침표 표기법 dot notation
console.log(apple['hello-bye']);        // 대관호 표기법 bracket notation
console.log(apple.hello);
console.log(apple['hello-bye1']);
apple['name'];                          // 모든 object의 key는 대괄호 표기법으로 속성에 접근 가능.

// 속성 추가
apple.emoji = '🍎';
console.log(apple.emoji);               // 동적으로 속성 추가 가능.
console.log(apple['emoji']);            // 괄호 표기법 이용해서 문자열로 접근 가능.

// 속성 삭제
delete apple.emoji;
console.log(apple);