import { Worker } from "node:worker_threads";

let arr = [];
for (let i = 0; i <= 1e6; i++) {
    arr.push(i);
}


const middleIndex = Math.floor(arr.length / 2);
const firstHalf = arr.slice(0, middleIndex);
const secondHalf = arr.slice(middleIndex);

console.time('Execution Time');


const worker = new Worker('./worker.js', {
    workerData: secondHalf
});


function countArrSum(arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        sum += arr[i];
    }
    return sum;
}

const firstHalfSum = countArrSum(firstHalf);


worker.on('message', (secondHalfSum) => {
    const totalSum = firstHalfSum + secondHalfSum;
    console.log(`Загальна сума: ${totalSum}`);
    console.timeEnd('Execution Time');
});

worker.on('exit', (code) => {
    if (code !== 0) {
        console.error(`Worker завершив роботу з кодом: ${code}`);
    }
});
