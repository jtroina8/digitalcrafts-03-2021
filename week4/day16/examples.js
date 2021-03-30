var thisIsA = "variable"; 

var arrayExample = ["iphone", "razr", "sidekick", "blackberry"]

var objectExampleJoey = {height: "188cm", weight: "170lbs", looks:"average"}

let exampleInteger = 69420;

let stringExample = "This is an example of a string";
//re assign string

let mathExample = exampleInteger * 5
console.log(mathExample)

var joeArray = ["swag", 123123, true, false, "boolean"]
console.log(joeArray[1]);
console.log(joeArray[3]);
console.log(joeArray[4]);
console.log(joeArray.length);

var joeObject = {
    scooby: {
        name:"Scooby-Doo", 
        age: 238, 
        height: 200, 
        metric: "6ft 7in"},
    shaggy: {
        name:"Norville Rogers", 
        age: 17, 
        height: 125, 
        metric: "6ft 0in"},
    fred: {
        name:"Fred Jones", 
        age: 17, 
        height: 180, 
        metric: "5ft 11in"},
    velma: {
        name:"Velma Dinkley", 
        age: 15, 
        height: 144, 
        metric: "4ft 9in"},
    daphne: {
        name:"Daphne Blake", 
        age: 16, 
        height: 170, 
        metric: "5ft 7in"}
}

console.log(joeObject.scooby.name);
console.log(joeObject.daphne.age);
console.log(joeObject.fred.height);
joeObject.fred.height = 1.2;
console.log(joeObject.fred.height)
joeObject.fred.metric = "meters"
console.log(joeObject.fred.metric)
joeObject.shaggy.sport = football;
console.log(joeObject.shaggy.sport);
