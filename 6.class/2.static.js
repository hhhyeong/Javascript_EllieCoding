// static 정적 프로퍼티, 메서드
class Fruit {

    static MAX_FRUITS = 4;
    // 생성자 : new 키워드로 객체를 생성할 때 호출되는 함수.
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }

    // 클래스 레벨의 메서드
    static makeRandomFruit() {
        // 클래스 레벨의 메서드에서는 this를 참조할 수 없음.
        return new Fruit('banana', '🍌');
    }

    // 인스턴스 레벨의 메서드
    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
}




// console.log(Fruit.name);


const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);
// apple 은 Fruit 클래스의  인스턴스이다.
const apple = new Fruit('apple', '🍎');
// orange 은 Fruit 클래스의  인스턴스이다.
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();


// 빌트인 함수에서 다룸.
// static을 이용하면, 오브젝트를 만들지 않고도 비슷한 내용의 함수들을 묶어서 관리할 수 있음.
Math.pow();
Number.isFinite(1);