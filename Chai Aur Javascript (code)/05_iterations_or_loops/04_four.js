let myObj = {
    myName: "Asad Riaz",
    city: "Islamabad",
    age: "19"
}


for (const key in myObj) {
    // console.log(myObj[key]);
    // console.log(`${key} is ${myObj[key]}`);
}


let myArr = ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "NextJS"]

for (const value in myArr) {
    console.log(myArr[value]);
}