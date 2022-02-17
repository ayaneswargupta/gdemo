//Array is a collection of data, Arays consists of clearproperties and methods in the form of key-value pairs

let obj={
    name:"Ayan",
    gender:"male"
};
console.log(obj);

let Alia={
    //properties -> variable inside/of an object is called property
    firstName: "Alia",
    lastname: "Bhatt",
    age: '30',
    boyfriend: "Ranbir Kapoor",
    //array as a proeprty
    movies: ['Highway','2 States','Dear Zindagi'],
    // object as a property
    Address:{
        State: 'Maharashtra',
        Place: 'Juhu',
        Zip: '1001'
    },
    //method-> functions inside objects , stored as a property are called method
    sayHi: function(){
        console.log("Beautifully Chaotic");
    }
}

console.log(Alia.firstName);//Alia    -> acces properties through dot operator
console.log(Alia["firstName"]);//Alia -> access properties through [] operator
console.log(Alia.movies[1]);//2 States-> access second element of the array property address

console.log(Alia.Address); //  { State: 'Maharashtra', Place: 'Juhu', Zip: '1001' } ->printing a nested object ->address 
console.log(Alia.Address.Place); //Juhu-> accessing nested objects properties with multiple dot notation
Alia.sayHi(); //Beautifully Chaotic -> accessing method of an object

console.log('-------------------------------');
//for loop in objects
//in keyword is used to get keys from that object
for(let haathi in Alia)
{
    //to print key
    console.log(haathi);
    //haathi jo variable h uske andar meri key ki value padhi hui h
    
    //to print value
    console.log(Alia[haathi]);//getting value of key haathi using bracket notation usage. This is the usage of bracket notation while accessing properties. Here if we used Alia.haathi it would have searhced for a key named as 'haathi' in Alia object and printed value binded to 'haathi' property
    //variable ke andar jo binded value h wo chahiye. One more usage of bracket notation is if keys are in number then dot notaion must not be used and only bracket notation should be used.

    //to print key value in single line
    console.log(`${haathi} : ${Alia[haathi]}`);
}

//To Delete an Attribute
delete Alia["boyfriend"];
console.log(Alia.boyfriend);//undefined since deleted


//In Javascript everything is an object from datatypes to Data Structure like String, Arrays etc.

//Example when we create an array like--
/**
 * let arr=['as','as','ds']
 * 
 * internally it works like-
 * let arr={
 *  0:'as',
 *  1:'as',
 *  2:'ds'
 * }
 * here 0 index works like key and 'as' as value
 * so in JS there is nothing like an array, everything is object only
 */

//-------------------------

//this keyword in JS- refers to current object
let car = {
    name: "Ferrari",
    model: 2022,
    startEngine: function () {
        console.log(`Starting the engine of the car ${this.name}`)//Here if we replace this with Car.name then also it gives same output
    }
}
car.startEngine();


