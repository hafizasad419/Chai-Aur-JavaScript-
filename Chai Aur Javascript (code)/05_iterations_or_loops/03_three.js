// for of

// ["", "", ""]
// [{}, {}, {}]

let myArr = [1, 2, "Asad", 4, 5];

for (const num of myArr) {

    // if (num == 3) {
    //     continue
    // }

    // if (num == 4) {
    //     break
    // }
    console.log(`${num}`);
}


let myString = "Asad Riaz"

for (const char of myString) {
    // if (char==" ") {
    //     break
    // }
    // console.log(`${char}`);
}

// M A P S


const myMap = new Map()

myMap.set("PAK", "Pakistan")
myMap.set("ENG", "England")
myMap.set("AUS", "Australia")

// console.log(myMap);

for (const [key, value] of myMap) {
    // console.log(`${key}:${value}`);
}

// forof loop can NOT iterate objects

// let myNewMap = new Map()
// myNewMap.set('name', "Asad")
// myNewMap.set('age', "19")
// myNewMap.set('language', "JavaScript")

// for (const [key, value] of myNewMap) {

//     console.log(value);
// }




// J U S T       R E W I S I N G       O B J E C T S

// let myObj = {
//     "myName": "Asad Riaz",
//     myCity: "Islamabad",
//     myAge: 19
// }

// console.log(`My Name is ${myObj['myName']} and I live in ${myObj.myCity}. I am ${myObj['myAge']} years old.`);