const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];
const numbers2 = [[],[],[]];
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
        if (numbers[i][j] % 2 === 0) {
            numbers2[i].push(numbers[i][j])
        }
    }
}
console.log(numbers2)