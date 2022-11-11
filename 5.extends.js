// class Tiger{
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log("먹자!");
//     }
//     sleep() {
//         console.log("잔다!");
//     }
// }
// class Dog{
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log("먹자!");
//     }
//     sleep() {
//         console.log("잔다!");
//     }
//     play() {
//         console.log("놀자!");
//     }
// }


class Animal {
    constructor(color) {
        this.color = color;
    }
    eat() {
        console.log("먹자!");
    }
    sleep() {
        console.log("잔다!");
    }
}

class Tiger extends Animal {}

const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();



class Dog extends Animal {
    // 주인 이름을 추가하기. Animal을 만들때 필요한 것 다 받아온 후, 속성 추가.
    constructor(color, ownerName) {
        // 부모의 생성자에 필요한 속성을 전달.
        super(color);
        this.ownerName = this.ownerName;
    }
    play() {
        console.log("놀자아~!");
    }
    // 오버라이딩 overriding
    eat() {
        // 부모 속성을 그대로 유지하고 싶을때.
        super.eat();
        console.log("강아지가 먹는다 !");
    }
}

const dog = new Dog('빨강이', '엘리');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
console.log(dog.color);
console.log(dog.ownerName);