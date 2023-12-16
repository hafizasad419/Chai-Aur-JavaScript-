let userOne = {
    userName: "Asad",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log(`Got user's details from Database`);
        console.log(`User Name is ${this.userName}`);
    }
}

// console.log(userOne['userName']);
// userOne.getUserDetails()


let userTwo = {
    userName: "Hitesh",
    loginCount: 2,
    signedIn: true,

    getUserDetails: function () {
        // console.log(`Got user's details from Database`);
        console.log(`User Name is ${this.userName}`);
    }
}

// userTwo.getUserDetails()

// userThree and so on, It is difficult to declare each object every time so we use constructor functions for creating them. 



function user(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // console.log(this);
    return this
}

let myUser = new user("Asad", 3, false)
let myUser2 = new user("Hitesh", 10, true)
console.log(myUser);