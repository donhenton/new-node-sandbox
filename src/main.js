Animal = require('./objects/animal')
Cat = require('./objects/cat')

let animal = new Animal();
let cat = new Cat();
animal.speak();
cat.speak();


let Joe = {name: "Joe Schmoe",title: "Vice President",salary: 65.23}

const mydata = {name,title,salary} = Joe

console.log(`joes salary is ${Joe.salary} and so is ${mydata.salary}`)