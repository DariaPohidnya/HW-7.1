function createSumFunction() {
    let total = 0;
    return function (num) {
        total += num;
        return total;
    };
}

const sum = createSumFunction();

console.log(sum(6));
console.log(sum(8));
console.log(sum(11));
console.log(sum(2)); 