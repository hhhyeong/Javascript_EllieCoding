// Boolean 에 해당하는 Wrapper 객체. Boolean
true.valueOf;

const isTrue = true; // new Boolean(true);  // Wrapper객체를 이용하여 true로 작성 가능하지만 메모리 낭비.
console.log(isTrue.valueOf()); // boolean의 value 출력.

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean
/**
 * Falshy 데이터 타입에서 거짓이 되는 값들.     // 조건문(if, while)에서 너무너무 중요!!!
 * 0
 * -0
 * null
 * NaN
 * undefined
 * ''
 */

/**
 * Truethy
 * 1
 * -1
 * '0'
 * 'false'
 * []
 * {}
 *  */
