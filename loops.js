//Part 1 Fizz Buzz
for (num = 0; num <= 100; num++) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log("Fizz Buzz");
    } else if (num % 3 == 0) {
        console.log("Fizz");
    } else if (num % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}