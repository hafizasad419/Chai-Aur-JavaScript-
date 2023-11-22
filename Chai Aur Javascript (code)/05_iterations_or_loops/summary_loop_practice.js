
// f o r    l o o p

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(i);

// }

// let myAge = 19
// for (let i = 0; i <= 19; i++) {
//     const element = myAge;
//     console.log(myAge);

// }

//  nested 'for' loop
// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i}*${j} = ${i * j}`);

//     }

// }




// w h i l e   l o o p
// let i = 1;
// while (i <= 10) {
//     // console.log(`value of i is ${i}`);
//     i++;
// }


//   d o     w h i l e     l o o p

// let score = 1
// // let score = 111

// do {
//     console.log(`I am Number ${score}`);
//     score++;

// } while (score <= 20);



// f o r o f       l o o p (mostly used in arrays)


// let myArray = ["Asad", "Saim", "Zain"]

// for (const value of myArray) {
//     // if (value=="Saim") {
//     //     continue
//     // }
//     // if (value=="Saim") {
//     //     break
//     // }
//     console.log(value);
// }


// f o r    i n    l o o p (mostly used for objects)

// let myObj = {
//     myName: "Asad",
//     myAge: 19,
//     isLoggedIn: true
// }

// for (const key in myObj) {
//     // console.log(`${key}`);
//     // console.log(`${myObj[key]}`);

// }

// f o r e a c h     l o o p 

// let myArray = ["iphone 7", "iPhone 7+", "iPhone 8", "iPhone 8+"]

// myArray.forEach((element, index, value) => (console.log(element, index, value)));


// looping on object inside an array
let myArrObj = [
    {
        langName: "JavaScript",
        langExtension: ".js"
    },
    {
        langName: "C++",
        langExtension: ".cpp"
    },
    {
        langName: "Python",
        langExtension: ".py"
    }
]

// myArrObj.forEach(element => {
//     return console.log(`${element.langExtension} is for ${element['langName']}`);
// });




// maps (it returns a new array but foreach doesn't)


let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


let newNums = myNumbers.map((num) => (num + 10))

// console.log(newNums);


let books = [
    {
        title: "Book One",
        genre: "fiction",
        published: 2001,
        edition: 2008,

    },
    {
        title: "Book two",
        genre: "non-fiction",
        published: 2008,
        edition: 2012,

    },
    {
        title: "Book three",
        genre: "history",
        published: 1999,
        edition: 2003,

    },
    {
        title: "Book four",
        genre: "horror",
        published: 2001,
        edition: 2008,

    },
    {
        title: "Book five",
        genre: "science",
        published: 2006,
        edition: 2019,

    }
]


// let userbooks = books.filter((book) => (
//     book.genre == "history"
// ))
// let userbooks = books.filter((book) => (book.edition >= 2000))
let userbooks = books.filter((book) => (book.edition >= 2000 && book.genre == "history"))

// console.log(userbooks);





