let arr = [];

for (let i = 0; i <= 1e6; i++) {
    arr.push(i);
}

function countArrSum(arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        sum += arr[i];
    }

    return sum;
}


console.time('Execution Time');
console.log(countArrSum(arr));
console.timeEnd('Execution Time');
