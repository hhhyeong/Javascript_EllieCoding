// 클래스 안의 프로퍼디(필드), 필드에 접근제어하는 방법.
// 접근제어자 - 캡슐화 : 한번 만들어둔 다음, 밖에서 바꾸지 못하도록 하기.
// private(#), public(기본), protected
class Fruit {
    // 필드 3개 (name, emoji : 외부로부터 전달받음, type : '과일'로 초기화되어있음.)
        // 생성자 안에서 주어지는 필드라면 생략 가능(name, emoji)
    #name;
    #emoji;
    #type = '과일';
    constructor(name, emoji) {
        this.#name = name;
        this.#emoji = emoji;
    }
    #display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
}




const apple = new Fruit('apple', '🍎');
// 에러 발생. #field는 외부에서 접근이 불가능함.
// apple.#name = '오렌지';      // 비공개 필드인 name은 클래스 내부에서만 접근 가능.           
console.log(apple);
// apple.display();