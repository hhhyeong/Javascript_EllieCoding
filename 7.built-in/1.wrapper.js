// 래퍼 객체 (Wrapper Object)
// 원시값을 필요에 따라, 관련된 빌트인 객체로 변환한다.
// 객체는 값뿐만 아니라 함수들(다양한 정보들)을 갖고있기때문에, 메모리를 많이 차지함.
// 값을 만들때마다 객체를 생성하면 애플리케이션이 뚱뚱해짐.
// 원시타입을 쓰다가 객체로 변환하고, 다시 원시타입으로 변환해서 사용함으로서 객체타입은 많이 사용하지 않도록 해야함.

const number = 123; //  number 원시 타입
// number 원시 타입을 감싸고 있는 Number 객체로 감싸짐
console.log(number.toString()); // Number 객체
console.log(number); // number 원시 타입

const text = "text"; // string 문자열 원시 타입
console.log(text);
text.length; // String 객체
text.trim();
