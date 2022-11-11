// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어보자
// 직원들의 정보 : 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원을 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Staff {
    #payRate;
    constructor(name, department, workingHour) {
        this.name = name;
        this.department = department;
        this.workingHour = workingHour;
        // this.payRate = payRate;
    }
    salary(payRate) {
        return (payRate * workingHour);
    }
}


class FullTime extends Staff {
    constructor(name, department, workingHour){
        super(name, department, workingHour);
    }
}
FullTime.payRate = 10000;

class PartTime extends Staff {
    constructor(name, department, workingHour){
        super(name, department, workingHour);
    }
}
PartTime.payRate = 8000;


const staff1 = new PartTime('정혜영', 'IT부서', 30);
const staff2 = new FullTime('엘리', 'Dev부서', 52);


// 실패 !!
// console.log(staff1.salary());
// console.log(staff2.salary());

// salary()를 getter로 접근하고 싶음.
// console.log(staff1.payment);
// console.log(staff2.payment);

// --------------------- 엘리 정답 --------------------------

class Employee {
    constructor(name, department, hoursPerMonth, payRate) {
        this.name = name;
        this.department = department;
        this.hoursPerMonth = hoursPerMonth;
        this.payRate = payRate;
    }
    calculatePay() {
        return this.hoursPerMonth * this.payRate;
    }
}

class FullTimeEmployee extends Employee {
    static PAY_RATE = 10000;
    constructor(name, department, hoursPerMonth) {
        super(name,department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
    }
}
class PartTimeEmployee extends Employee {
    static PAY_RATE = 8000;
    constructor(name, department, hoursPerMonth) {
        super(name,department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
    }
}


const staff3 = new PartTimeEmployee('정혜영', 'IT부서', 30);
const staff4 = new FullTimeEmployee('엘리', 'Dev부서', 52);

console.log(staff3.calculatePay());
console.log(staff4.calculatePay());