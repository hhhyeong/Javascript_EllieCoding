// 객체에 함수 선언
const apple = {
    name: 'apple',
    display: function() {
        console.log(`${this.name}: 🍎`)
    },
};
apple.display();