console.log("Start of the execution queue");

// Scheduling the final code block with no delay
setTimeout(function() {
    console.log("Final code block to be executed");
}, 0);

// Loop to log numbers 1 to 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

console.log("End of the loop printing");
