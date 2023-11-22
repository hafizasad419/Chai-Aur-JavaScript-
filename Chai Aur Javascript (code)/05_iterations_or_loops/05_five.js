let coding = ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "NextJS"]

// coding.forEach(function (langName) {

//     console.log(langName);
// })

// coding.forEach((langName) => (console.log(langName)))
// O R 
// coding.forEach((langName) => { return console.log(langName) })


//  We can also define a function and then pass it in foreach method

function printMe(item) {
    console.log(item);
}

// coding.forEach(printMe)



// looping on value of an object inside an array


let myArrObj = [
    {
        name: "Asad Riaz",
        age: 19

    },

    {
        name: "Zain Riaz",
        age: 23
    },

    {
        name: "Saim Riaz",
        age: 16
    }
]

myArrObj.forEach((val) => (console.log(val.name)))