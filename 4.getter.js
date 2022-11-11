// 접근자 프로퍼티 (Accessor Property)
// 변수처럼 보이지만, 실제로는 함수임.
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        // property처럼 접근하여 "성 + 이름" 출력 가능.
        // -> but, 생성자에서 한번 생성된 후 ①과 같이 firstName 속성 변경해도 fullName 속성이 업데이트되진 않음.
        // this.fullName = `${this.lastName} ${this.firstName}`;
    }
    // 일반함수를 이용하여 "성 + 이름" 출력하는 함수.
    // -> 행위가 아니고, 객체의 이름이라는 상태를 얻는건데 함수로 쓰는게 이상함.
    // fullName() {
    //     return `${this.lastName} ${this.firstName}`;
    // }
    
    // getter, setter : 행위가 아니기 때문에, 함수가 아니라 property의 일부분처럼 접근하고 싶을때
    //                  property를 조합해서 만들거나 조금 더 제어하고 싶을때 사용.
    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    }
    set fullName(value) {
        console.log('set', value);
    }

}

// 생성자 호출.
const student = new Student('수지', '김');
// ①
student.firstName = '안나'
// console.log(student.fullName());
console.log(student.firstName);

// get함수를 이용하여 함수로 호출하지 않고, property처럼 호출하기. 
// 함수지만(고정된 값이 아니라), 호출하는 시점에 데이터를 만들어서 return하는데,
// 특정한 일을 수행하는 게아니라 속성의 한 부분이라고 간주되는 작업을 함수로 만들어야 할 때.
// 함수 호출하는 것처럼 호출하지 않고, 속성에 접근하듯이 만들 수 있음.
console.log(student.fullName);          // .을 이용하여 get 프로퍼티에 접근
student.fullName = '김철수';              // =로 할당하여 이용하면 set 프로퍼티에 접근

