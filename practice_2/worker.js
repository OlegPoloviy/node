import { workerData, parentPort } from "node:worker_threads";

function countArrSum(arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        sum += arr[i];
    }
    return sum;
}


const sum = countArrSum(workerData);


parentPort.postMessage(sum);
