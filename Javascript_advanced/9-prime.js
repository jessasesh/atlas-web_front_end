function countPrimeNumbers() {
    let count = 0;

    function isPrime(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            count++;
        }
    }

    return count;
}

let startTime = performance.now();
let primeCount = countPrimeNumbers();
let endTime = performance.now();

let executionTime = endTime - startTime;

console.log(`Execution time of printing countPrimeNumbers was ${executionTime} milliseconds.`);
