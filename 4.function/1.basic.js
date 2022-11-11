// 사용예지 1
function add(num1, num2) {
    const result = num1 + num2;
    return result;
    // return num1 + num2;
}

const result = add(1, 2);
console.log(result);


// 사용예지 2
let lastName = '김';
let firstName = '지수';
let fullName = `${lastName} ${firstName}`;
console.log(fullName);

let lastName2 = '박';
let firstName2 = '철수';
let fullName2 = `${lastName2} ${firstName2}`;
console.log(fullName2);

// -> 함수화
function fullName(firstName, lastName) {
    return `${lastName2} ${firstName2}`;
}
console.log(fullName(firstName, lastName));
console.log(fullName(firstName2, lastName2));