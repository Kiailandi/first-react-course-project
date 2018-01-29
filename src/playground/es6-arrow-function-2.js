const add = function(a, b){
    console.log(arguments)
    return a + b;
}

console.log(add(1, 2, 150));

const addArrow = (a, b) => {
    //console.log(arguments);
    return a + b;
}

const user = {
    name: "Tommaso",
    cities: ["Rovereto", "Trento"],
    printPlacesLived() {
        return this.cities.map((city) => this.name + " has lived in: " + city);
        
        /*this.cities.forEach((city) => {
            console.log(this.name + " has lived in: " + city);
        });*/
    }
}

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 5,
    multiply() {return this.numbers.map((number) => number * this.multiplyBy);}
};

console.log(multiplier.multiply());