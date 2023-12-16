function setUserName(username) {
    // complex DB Calls
    this.username = username;
}

function createUser(username, email, password) {
    setUserName.call(this, username)
    this.email = email;
    this.password = password;
}


let asad = new createUser("Asad Riaz", "hafizasad419@gmail.com", "securePassword");

// console.log(typeof asad);
// console.log(asad);


//QUICK PRACTICE

function myRAM(RAM) {
    this.RAM = RAM;
}

function laptopConstructor(RAM, SSD, batteryLife) {
    myRAM.call(this, RAM)
    this.SSD = SSD
    this.batteryLife = batteryLife
}

let myLaptop = new laptopConstructor("4GB", "128GB", "6 Hours");

// console.log(myLaptop);

// C O O O O O O O O O O L  ______  M   A   N   ! ! ! ! ! ! 

// ok, let's continue and move on to new file 

