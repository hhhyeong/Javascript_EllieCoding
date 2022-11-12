// 퀴즈 !
// 1. 문자열의 모든 캐릭터를 하나씩 출력하라
const text = "Hello World!";
// H
// e
// l
// l
// o
// ..
// !
for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}

// 2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보완
const ids = "user1, user2, user3, user4";
// ['user1', 'user2', 'user3', 'user4']
const answer = [];
for (let i = 0; i < ids.split(", ").length; i++) {
  answer.push(ids.split(", ")[i]);
}
console.log(answer);
// ----------------- 엘리 정답 --------------------
const array = ids.split(", ");
console.log(array);

// 3. 1초에 한번씩 시계를 (날짜포함) 출력해보기
//declare function setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
// setInterval(() => {}, 1000);
setInterval(() => console.log(new Date()), 1000);
// ----------------- 엘리 정답 --------------------
setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleString("ko-KR"));
}, 1000);
