let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newNums = myNumbers.map((num) => (num + 10))

//Chaining
let newNums = myNumbers.map((num) => (num * 10)).map((secondNum) => (secondNum + 1)).filter((thirdNum) => (thirdNum <= 50))
console.log(newNums);

// chaining practice

// let myArray = ["John Cena", "Seth Rollins", "Brock Lesnar"]

// let Tareef = myArray.map((wrestler) => (wrestler + " is WWE Superstar")).map((wrestler) => (wrestler + " and one of my favorite"))

// console.log(Tareef);

// console.log(Tareef[0]);
// console.log(Tareef[1]);
// console.log(Tareef[2]);
















// let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let myDoubledArray = []
// myNumbers.forEach((nums) => (myDoubledArray.push(nums * 2)))
// console.log(myDoubledArray);


