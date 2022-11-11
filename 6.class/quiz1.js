// 카운터를 만들기
// 0 이상의 값으로 초기화한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기.
// Counter 클래스

class Counter {
    #count
    constructor(init) {
        if (init >= 0){
            this.#count = init;
        } else {
            this.#count = 0;
        }
    }
    get showCurrentCount() {
        return this.#count;
    }
    addCount() {
        this.#count++;
    }
}

const counter = new Counter(4);
counter.addCount();
console.log(counter.showCurrentCount);
counter.addCount();
counter.addCount();
console.log(counter.showCurrentCount);


// --------------------------- 엘리 정답 -----------------------------

// Step #2. 클래스 작성.
class Counter_answer {
    #value;
    constructor(startValue) {
        // 유효성 검사
        if (isNaN(startValue) || startValue < 0) {
            this.#value = 0;
        } else {
            this.#value = startValue;
        }
    }

    // value getter 를 이용하여 읽기만 가능.
    get value() {
        return this.#value;
    }

    // public increment()함수로 유일하게 외부에서 +1 연산 가능.
    increment = () => {
        this.#value++;
    };
}

// Step #1. 실제 클래스 만들기 전에, 어떻게 사용할건지 사용자 입장에서 사용해보고 Unit Test 작성.
const counter2 = new Counter_answer(0);  // 0, -1, 4 ...
counter2.increment();             // 1
counter2.increment();             // 2
console.log(counter2.value);      // 현재 value 출력하기.
