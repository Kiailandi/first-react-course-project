var nameVar = "One";
var nameVar = "Two";
console.log("nameVar: ", nameVar);

let nameLet = "One";
//let nameLet = "Two"
nameLet = "Two";
console.log("nameLet: ", nameLet);

const nameConst = "One";
//const nameConst = "Two"
//nameConst = "Two"
console.log("nameConst: ", nameConst);

const fullName = "Tommaso Montefusco";

if(fullName){
    var firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);

let secondName;

if(fullName){
    let secondName = fullName.split(" ")[1];
    console.log(secondName);
}

console.log(secondName);
