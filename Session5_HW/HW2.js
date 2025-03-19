let rows = 5;

for (let i = 1; i <= rows; i++) {
    let str = "";
    for (let j = 1; j <= 2 * i - 1; j++) {
        str += "*";
    }
    console.log(" ".repeat(rows - i) + str); // 공백으로 중앙 정렬
}
