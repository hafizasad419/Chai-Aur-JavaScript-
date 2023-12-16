// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); //Value is not changed coz it is constant but we can change its value hehe. Let's see. 

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(descriptor);

let asad = {
    name: "Asad",
    age: 19,
    isLoggedIn: true,


}

// console.log(asad);

// console.log(Object.getOwnPropertyDescriptor(asad, "name"));
// console.log(Object.getOwnPropertyDescriptor(asad, "age"));
// console.log(Object.getOwnPropertyDescriptor(asad, "isLoggedIn"));

Object.defineProperty (asad, 'age', {
    writable: false, 
    enumerable: false, 
    configurable: true
})


// console.log(Object.getOwnPropertyDescriptor(asad, 'age'));


for (let [key, value] of Object.entries(asad)) {
    // console.log(`${key} : ${value}`);
}



let asadAgain = {
    name: "Asad",
    age: 19,
    isLoggedIn: true,

    //let's add a function in object

    getAsadBirthday: function () {
        console.log(`Asad's Birthday is on 2nd August and also on 1st june, It's a secret haha.`);
    }
}

for (let [key, value] of Object.entries(asadAgain)) {
    // let's add a check that if value is not a type of function then iterate, otherwise do not.

    if (typeof value !== 'function') {

        // console.log(`${key} : ${value}`);
    }

}

Object.defineProperty (asadAgain, 'age', {
    writable: false, 
    enumerable: false, 
    configurable: true
})

// now age can not be iterated, let's see

for (let [key, value] of Object.entries(asadAgain)) {

    if (typeof value !== 'function') {

        console.log(`${key} : ${value}`);
    }

}   //output: name : Asad, isLoggedIn : true //coz age was not iteratable
