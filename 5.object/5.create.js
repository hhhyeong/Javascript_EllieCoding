// 4.function > 5.expression.js 의 생성자 함수 const object = new Function();

// const apple = {
//     name: 'apple',
//     display: function() {
//         console.log(`${this.name}: 🍎`)
//     },
// };

// const orange = {
//     name: 'orange',
//     display: function() {
//         console.log(`${this.name}: 🍊`);
//     },
// };


// 생성자 함수 (함수명은 대문자로 시작하고, 함수 내부에서 this로 자기 자신 객체를 가리킬수있음.)
// 정해진 틀(템플릿, 양식) 안에서 원하는 객체를 만들 수 있음.
function Fruit(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    // this.display = function() { }
    this.display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
    // return this;     // 생략 가능. 생성자함수에서는 자동으로 객체 반환.
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();