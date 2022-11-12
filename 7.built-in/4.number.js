// MDN Number: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
const num1 = 123;
const num2 = new Number(123); // 메모리 낭비가 될 수 있음.
console.log(num1);
console.log(num2);

console.log(Number.MAX_VALUE);
// e+308 : 10 ^ 308
// 1.795 * 10^308
console.log(Number.MIN_VALUE);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.EPSILON);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

if (num1 < Number.MAX_VALUE) {
}
if (num1 === Number.NaN) {
}
if (Number.isNaN(num1)) {
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());
// 1.02e+2  = 1.02 * 10^2

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());

console.log(num4.toString());
// 그나라 지역 언어로 변환해서 보여줘야 할 경우 사용 (ex.아랍)
console.log(num4.toLocaleString("ar-EG"));

// 원하는 자릿수까지 유효하도록 반올림 (ex.6자리수를 n자리 숫자만 표현)
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); //  전체 자릿수 표기가 안될 때는 지수표기법.

console.log(Number.EPSILON); // 0과 1 사이에서 나타낼 수 있는 가장 작은 숫자.

if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON);
}

const num = 0.1 + 0.2 - 0.2; // 0.1
// JavaScript에서 실수끼리 계산할 때 내부적으로는,
// 10진수를 2진수로 각각 변환한 후, 연산 후, 2진수(0,1 bit의 조합)를 다시 10진수로 반환함.
// 정확하게 부동소수점까지 계산되지 않아서 작은 오차(EPSILON)가 발생함.
console.log(num); // 0.10000000000000003

// 같은지 확인. (작은 미세한 차이를 간주하고 싶지 않을 경우)
function isEqual(original, expected) {
  //   return original === expected;    // 완전히 같아야 하는 경우.
  return Math.abs(original - expected) < Number.EPSILON;
}
console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1));
