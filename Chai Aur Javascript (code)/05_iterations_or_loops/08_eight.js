let myNums = [1, 2, 3]


// let myTotal = myNums.reduce(function (acc, currVal) { return acc + currVal }, 0)
// let myTotal = myNums.reduce((acc, currVal) => (console.log(`accumulator: ${acc}, Current Value: ${currVal}`), acc + currVal), 0)

// console.log(myTotal);


let shoppingCart = [
    {
        itemName: "JS Course",
        price: 999
    },
    {
        itemName: "TS Course",
        price: 1499
    },
    {
        itemName: "NextJS Course",
        price: 1999
    }
]

let totalPrice = shoppingCart.reduce((acc, item) => (acc + item.price), 0)

// console.log(totalPrice);


// A N O T H E R       E X A M P L E

let myBills = [
    {
        itemName: "Almonds",
        itemPrice: 999
    },
    {
        itemName: "Dates",
        itemPrice: 300
    },
    {
        itemName: "Kishmish",
        itemPrice: 450
    }
]

let myTotal= myBills.reduce((acc, item) => (acc + item.itemPrice), 0)

// console.log(myTotal);