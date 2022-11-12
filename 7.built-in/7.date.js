// UTC기준 ()
// 현재 시간
console.log(new Date());
console.log(new Date("Jun 5, 2022"));
console.log(new Date("2022-12-25T15:00:00.000Z"));

console.log(Date.now());
console.log(Date.parse("2022-12-25T15:00:00"));

const now = new Date();
now.setFullYear(2023);
now.setMonth(0); //  0: 1
console.log(now.getFullYear());
console.log(now.getDate()); // 0: 1
console.log(now.getDay()); // 0 일요일부터, 1... 6: 토요일
console.log(now.getTime());
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString()); //iSO 8601 형식
console.log(now.toLocaleDateString("en-US"));
console.log(now.toLocaleDateString("ko-KR"));
