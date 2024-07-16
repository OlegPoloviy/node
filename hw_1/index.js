const Arr = require('./MyArray.js');
// import { MyArray } from "./MyArray.js";

const arr = [1,22,200,34,11];

// const myArr = new MyArray(arr);
const arrCommon = new Arr(arr);

arrCommon.printArr();

const min = arrCommon.findMin();
console.log(min);

const sum = arrCommon.findSum();
console.log(sum);

const sorted = arrCommon.sortArr();
console.log(sorted);