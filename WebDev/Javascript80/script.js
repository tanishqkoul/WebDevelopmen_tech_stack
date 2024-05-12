// let obj = {
//     a:1;
//     b:"Tanishq"
// }

// console.log(obj)

// let animal = {
//     eats : true;
// }

// let rabbit = {
//     jumps :true
// };

// rabbit.__proto__ = animal;

class Animal{
    constructor(name){
        this.name = name
        console.log("Objected is created")
    }
    eats(){
        console.log("Kha raha hoon")
    }
    jumps(){
        console.log("i know how to jump")
    }
}

class Loin extends Animal {
    constructor(name){
        super(name);
        console.log("Objected is created and he is a lion...")
    }
}

let a  = new Animal("Bunny");
console.log (a)

let l = new Loin("Shera")
console.log(l)