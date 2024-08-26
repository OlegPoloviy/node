const start = performance.now();

const bigArray = Array.from({ length: 1e4 }, () =>
    Math.floor(Math.random() * 40)
);

const numParts = 4;

const chunkSize = Math.ceil(bigArray.length / numParts);

let totalSum = 0;

// Обчислення суми кожної частини
for (let i = 0; i < numParts; i++) {
    const start = i * chunkSize;
    const end = start + chunkSize;
    const arrayChunk = bigArray.slice(start, end);
    const chunkSum = arrayChunk.reduce((acc, num) => acc + num, 0);


    console.log(`Проміжна сума частини ${i + 1}: ${chunkSum}`);

    totalSum += chunkSum;
}

console.log(`Загальна сума: ${totalSum}`);
console.log(`Час виконання: ${(performance.now() - start) / 1000} с`);
