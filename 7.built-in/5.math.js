// Math 오브젝트
// 원시타입과 연관된 객체는 아니지만, 숫자를 이용하여 계산할때 필요한 유용한 함수들이 있음.
// static properties, method. Math객체를 직접 만들일은 거의 없음.
console.log(Math.E); // 오일러의 상수ㅜ, 자연로그의 밑
console.log(Math.PI); // 원주율PI값

// static memthod
// 절대값
console.log(Math.abs(-10));
// 소수점 이하를 올림
console.log(Math.ceil(1.4));
// 소수점 이하를 내림
console.log(Math.floor(1.4));
// 소수점 이하를 반올림
console.log(Math.round(1.4));
console.log(Math.round(1.7));
// 정수만 반환
console.log(Math.trunc(1.4));

// 최대, 최소값을 찾기
console.log(Math.min(1, 3, 4));
console.log(Math.max(1, 3, 4));

// 거듭제곱
console.log(3 ** 2);
console.log(Math.pow(3, 2));

// 제곱근
console.log(Math.sqrt(9));

// 랜덤한 값을 반환
console.log(Math.random());

// 1~10
console.log(Math.floor(Math.random() * 10 + 1));
