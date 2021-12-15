// Define a blueprint for our new "data type"

class Book {

}
// Create an instance
let b = new Book();
console.log(b)


class Person {
    constructor(firstName, lastName){
        console.log("A new person was born")
        this.firstName = firstName
        this.lastName = lastName
    }
    
}

const hayden = new Person("Pali", "Azhar") // Then the constructor
console.log(hayden)

class Movie{
    constructor(title){
        // 'this' will refer to a new empty object
        // and will be automatically returned for us
        this.title = title;
    }
    watch(){
        let message = `You are watching ${this.title}`
        console.log(message);
    }
    addRating(num){
        this.rating = num
    }
}

const peaks = new Movie("14 Peaks")
peaks.watch()
peaks.addRating(4.5)
console.log(peaks)
const  frozen = new Movie("Frozen")
frozen.watch()
frozen.addRating(3)

console.clear();

// Promises - Basic

function handleSuccessPromise(value){
    console.log(value)
}

function handleFailedPromise(err){
    console.log(err)
}

function myExecutor(resolve, reject){
    // resoulve is used for saying the promise is successful
    // reject is used to say the promise is failed
    //resolve("Done")
    reject("Failed")
}

let myPromise = new Promise(myExecutor);

myPromise.then(handleSuccessPromise).catch(handleFailedPromise)

function delayExecutor(resolve){
    setTimeout(function(){
        resolve("This delayed")
    },5000)
}

function successHandler(){
    console.log("This ran")
}

let delay = new Promise(delayExecutor);

delay.then(successHandler)