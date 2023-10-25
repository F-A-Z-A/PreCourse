const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];
const numbers2 = [];
for (let arr of numbers) {
    for (let num of arr) {
        if (num % 2 === 0) {
            numbers2.push(num);
        }
    }
}
console.log(numbers2)