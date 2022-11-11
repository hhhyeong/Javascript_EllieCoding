// MDN 객체로 작업하기: https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects
const obj = {
    name: '엘리',
    age : 20,
};
// 코딩하는 시점에, key를 통해 value에 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용!
    // obj안의 key에 접근하는 함수.
function getValue(obj, key) {
    // return obj.key;          // 객체 안에 'key'라는 이름의 key가 없으므로 접근 불가능.
                                // obj 안에서도 key 중 name이 될수도 있고, age가 될수도 있기 때문에 불가능.
    return obj[key];
}
console.log(getValue(obj, 'name'));


// 동적으로 속성 추가
function addKey(obj, key, value) {
    obj[key] = value;
}
addKey(obj, 'job', 'engineer');
console.log(obj);


// 동적으로 속성 삭제
function deleteKey(obj, key) {
    delete obj[key];
}
deleteKey(obj, 'job');
console.log(obj);