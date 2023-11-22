// let myArr = ["Asad", "Saim", "Zain", "Ahmad"]

// let brothers = myArr.forEach((value) => (console.log(value)))

// console.log(brothers);


let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let biggerNumbers = myNums.filter((num) => {
    return num > 5
})

// console.log(biggerNumbers);





let myNewNums = []


myNums.forEach((num) => {
    if (num > 5) {
        myNewNums.push(num)
    }
})

// console.log(myNewNums);



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

console.log(userbooks);


