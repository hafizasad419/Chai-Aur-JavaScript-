// functions
function ItsmyName() {
    console.log("A");
    console.log("S");
    console.log("A");
    console.log("D");
}
// myName()


function addTwo(num1, num2) {
    let result = (num1 + num2);
    return result;
}
let result = addTwo(15, 15);
// console.log("Result:",result);
// console.log(result);


function loginUserMessage(userName = "") {
    // if (userName===undefined)
    // if (!userName)

    //  {
    //     console.log("Please Enter a username");
    //     return
    // }

    return `Hey${userName}, Welcome Back`
}


// console.log(loginUserMessage("Asad"));  output: Hey Asad, Welcome Back
// console.log(loginUserMessage());  //output: Hey , Welcome Back


//     S E L F      P R A C T I C E         //


function WWE(wrestler_Name) {
    if (!wrestler_Name) {
        console.log("Please Enter Westler Name");
    }
    else {
        let wrestler_message = console.log(`${wrestler_Name} is a WWE Superstar`)
        return wrestler_message
    }

}

// WWE("John Cena")




/////////   L E T's   C O N T I N U E        ///////////


function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 1000));



// function calculateCartPrice2(val1, val2, ...num1) {
//     return num1
// }

// console.log(calculateCartPrice2(200, 400, 500, 1000));


let user = {
    username: "Asad Riaz",
    age: 19
}

function HandleObject(anyobject) {
    console.log(`Username Is ${anyobject.username} and his age is ${anyobject.age}`);
}



// HandleObject(user)
// OR we can also pass object like this
// HandleObject({
//     username: "Hitesh",
//     age: 30
// }

// )


let myNewArr = [200, 400, 100, 600]
let myNewArr1 = ["Hafiz", "Asad", "Riaz"]

function getSecondValue(anyArr) {
    return console.log(anyArr[1])
}


// getSecondValue(myNewArr) OR Give Array Directly
// getSecondValue([200, 400, 100, 600])

// getSecondValue(myNewArr1) OR Give Array Directly
// getSecondValue(["Hafiz", "Asad", "Riaz"])