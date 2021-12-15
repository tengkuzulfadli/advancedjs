// Event Binding
// When event listener runs, the this keyword will refer to the target of the event

let button = document.querySelector("button");

function onBtnClick(){
    console.log(this)
}
button.addEventListener("click", onBtnClick)

//Implicit binding
// When call a method, the keyword this will refer to the containing object

let person = {
    name: "Jacques",
    speak: function(){
        console.log(this) //will refer to the containing object
        console.log(this.name)
    }
}

person.speak();

function createPerson(name, email){
    let obj = {
        name: name,
        email: email,
        speak: function(){
            console.log(this)
            console.log(this.name)
            console.log(this.email)
        }
    }
    return obj
}

let zul = createPerson("Zul", "zul@zul.com")
zul.speak(); // Zul will be "This"

let pali = createPerson("Pali", "pali@pali.com")
pali.speak(); // Pali will be "This"

// Explicit binding
// When we use .cal, .apply or .bind
//   the keyword 'This' refers to the provided argument

function greet(){
    console.log(this.name)
}

let tengku = { name: "Tengku" };

greet.call(tengku) // 'this' is set explicitly to tengku

let manijeh = { name: "Manijeh" };

greet.call(manijeh) // 'this' is set explicitly to manijeh

greet.call({ name: "Emma" });


// 'new' Binding
// 'this' will be set to a new empty object which will be automatically returned for you

// Defining the blueprint
class Animal {
    constructor(){
        console.log(this)
    }
}

// Creating an instances
let dog = new Animal();

console.clear();