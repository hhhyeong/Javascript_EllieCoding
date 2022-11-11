// 조건문 Conditinal Statement
// if(조건) {}
// if(조건) {} else {}
// if(조건1) {} else if(조건2) {} else {}

let fruit = 'apple';
if(fruit === 'apple') {   //  값과 타입도 문자열이라면,
    console.log("true");
} else {
    console.log("false");
}


if(fruit === 'apple') {   //  값과 타입도 문자열이라면,
    console.log("true");
} else if (fruit === 'orange') {
    console.log(":orange");
} else {
    console.log("false");
}


if(0) {                   // false : false, 0, '', null, undefined, 2 < 1
                          // true  : true, 1, 'sdf', 2 > 1
    console.log("출력되면 안됨!");
}