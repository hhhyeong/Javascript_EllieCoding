// 주어진 숫자만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함.
// 5, 순회하는 숫자를 다 출력하고 싶음.
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음.
// function iterate(max,  action)
function iterate(max, action) {
    for (let i = 0; i < max; i++){
        action(i);
    }
}

// 콜백함수
const print = (a) => console.log(a);
const print2 = (a) => console.log(a * 2);
iterate(5, print);
iterate(5, print2);

iterate(5, (num) => console.log(num));
iterate(5, (num) => console.log(num * 2));

// 3초가 지난 후 callback 함수를 실햏해줘.
// setTimeout(callback, 3000);
    // 고차함수 setTimeout에 함수자체를 전달함.
setTimeout(() => {
    console.log('3초뒤 이 함수가 실행될거에요')
}, 3000);