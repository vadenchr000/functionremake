//1

function square(Z, B) {
    return Z + B;
}

console.log(square(4, 19));


// 2

const greet = (name) => 'Hello + name';
console.log(greet('Hello!Im Josh!'));

//3

function outer() {
    let count = 5;
    return function inner() {
        count++;
        return count;
    };
}
const counter = outer();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

//4

const result = (function(c, b){
    return c + b;

})(3, 2);

console.log(result);
