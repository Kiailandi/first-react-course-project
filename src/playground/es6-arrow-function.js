const square = function(x){
    return x * x;
}

console.log(square(2));

const squareArrow = (x) => x*x;

console.log(squareArrow(2));

const getFirstName = (name) => name.split(" ")[0];

console.log(getFirstName("Tommaso Montefusco"));