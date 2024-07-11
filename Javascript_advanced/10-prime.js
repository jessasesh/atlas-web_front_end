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


function measureExecutionTime() {
    let totalTime = 0;

    for (let i = 0; i < 100; i++) {
        let startTime = performance.now();
        countPrimeNumbers();
        let endTime = performance.now();
        let executionTime = endTime - startTime;
        totalTime += executionTime;
    }


    console.log(`Execution time of calculating prime numbers 100 times was ${totalTime / 100} milliseconds.`);
}

measureExecutionTime();
