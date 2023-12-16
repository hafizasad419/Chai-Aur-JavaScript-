class User {
    constructor(email, password) {
        this._email = email;
        this._password = password;
    }

    // get email(){

    // }

    get password() {
        // return this._password.toUpperCase()
        return `${this._password}abc`
    }

    set password(val) {
        this._password = val;
    }
}

let asad = new User("hafizasad419@gmail.com", "securePassword");

// console.log(asad.password);



//let's practice


class programmer {
    constructor(name, language, role, isLoggedIn) {
        this._name = name
        this._language = language
        this._role = role
        this._isLoggedIn = isLoggedIn
    }


    get language() {
        return `${this._language} is very popular and versatile language.`
    }

    set language(val) {
        this._language = val
    }

    get isLoggedIn() {
        return !this._isLoggedIn
    }

    set isLoggedIn(val) {
        this._isLoggedIn = val
    }
}

let me = new programmer("Asad Riaz", "Javascript", "Full stack developer", false);

// console.log(me.language); //comment out getter&setter and then see the result being printed. 
// console.log(me._language); //interesting

// console.log(me.isLoggedIn);
// console.log(me._isLoggedIn); //hehe





//old way to define getter setter is below:

function chai(ingredient1, ingredient2, ingredient3) {
    this._ingredient1 = ingredient1
    this._ingredient2 = ingredient2
    this._ingredient3 = ingredient3

    //function can also behave as object

    Object.defineProperty(this, 'ingredient2', {
        get: function () {
            return `${this._ingredient2} is my favorite tea.`
        }
        ,
        set: function (val) {
            this._ingredient2 = val
        }
    })


}

let myChai = new chai("Milk", "yellow label tea", "sugar")

// console.log(myChai.ingredient2);




// let's re practice

function car(name, model, price, brand) {
    this._name = name;
    this._model = model;
    this._price = price;
    this._brand = brand;


    Object.defineProperty(this, "model", {
        get: function () {
            return `${this._model} ${this._brand} model is still considered pretty advanced Car.`
        },
        set: function (val) {
            this._model = val;
        }
    })


}


let yourNextCarInshallah = new car("civic", 2024, "$1200", "Honda");

// console.log(yourNextCarInshallah);
// console.log(yourNextCarInshallah.model);


