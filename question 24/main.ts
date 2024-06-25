//More Conditional Tests: You don’t have to limit the number of tests 
//you create to 10. If you want to try more comparisons, write more tests. 
//Have at least one True and one False result for each of the following:

//• Tests for equality and inequality with strings

console.log("equality test", ("Urooba Akram" as string) === "Urooba Akram")

console.log("inequality test", ("Urooba Akram" as string) !== "Ayan Khan")

//• Tests using the lower case function

console.log("Lowercase test","UROOBA AKRAM".toLocaleLowerCase() === "urooba akram")

//•Numerical tests involving equality and inequality, 
//greater than and less than, greater than or equal to, and less than or equal to

console.log("equality test", 5000 === 5000);
console.log("inequality test", (20 as number) !== 15);
console.log("greater than test", 50000 > 5000);
console.log("less than test", 5000 < 50000);
console.log("greater than equal to test", 20 >= 20);
console.log("less than equal to test", 20 <= 35);

//• Tests using "and" and "or" operators

console.log("and operator test", true && true);
console.log("or operator test", true || false);

//Test whether an item is in a array

let car = [1,2,3,4]
console.log("test number", car.includes(2));

//• Test whether an item is not in a array

let Van = [1,2,3,4]
console.log("test number", !Van.includes(7));

