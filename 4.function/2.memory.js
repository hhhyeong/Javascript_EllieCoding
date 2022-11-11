function add(a, b) {
    return a + b;
}
const sum = add;

console.log(sum(1, 3));
console.log(add(1, 4));     // 1 + 4 = 5
console.log(add(1));        // 1 + undefined = NaN