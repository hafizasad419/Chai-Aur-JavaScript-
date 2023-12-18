let score = 33;
// console.log(typeof (score));

let score1 = "34";
let ValueInNumber1 = Number(score1)
// console.log(typeof (ValueInNumber1));

let score2 = "33abc"
let ValueInNumber2 = Number(score2)
// console.log(typeof (ValueInNewNumber2));
// console.log(ValueInNewNumber2);

let score3 = null
let ValueInNewNumber3 = Number(score3)
// console.log(typeof (ValueInNewNumber3));
// console.log(ValueInNewNumber3);


let score4 = undefined //undefined
let ValueInNewNumber4 = Number(score4)
// console.log(typeof (ValueInNewNumber4));
// console.log(ValueInNewNumber4);

let score5 = true
let ValueInNewNumber5 = Number(score5)
// console.log(typeof (ValueInNewNumber5));
// console.log(ValueInNewNumber5);


//  "33" => 33
//  "33abc" => NaN 
// ------------
//  "true" => 1

let IsLoggedIn = 3;

let booleanIsLoggedIn = Boolean(IsLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true
// 2 and so on => true
// 0 => false
// "" => false //empty string
// "asad" => true //string having some value


let someNumber = 33

letConvertToString = String(someNumber)

// console.log(typeof letConvertToString);






/*                           O P E R A T I O N S                       */


let value = 3;
let negvalue = -value
// console.log(negvalue); //output: -3

let str1 = "hello"
let str2 = " asad"

let str3 = (str1 + str2)
// console.log(str3); //output: hello asad

let str4 = ("1" + 5)
// console.log(str4) //output: 15


let str5 = ("1" + 5 + 6)
// console.log(str5); // output: 156

let str6 = (1 + 5 + "6")
// console.log(str6);
// console.log(str5); // output: 66

let str7 = ("1" + 5 + "6")
// console.log(str7); //output 156
// console.log(str5); // output: 156

let str8 = ("1" + 5 + 6)
// console.log(str8);
// console.log(str5); // output: 156

// console.log("2">=1); // output: true

// console.log(null > 0); // output: false
// console.log(null < 0); // output: false
// console.log(null == 0); // output: false
// console.log(null >= 0); // output: true /* In this case silly JS just converted null to 0 and then compared it haha*/


// console.log("2" == 2); //output: true  // coz it converted "2" to 2



/* But Wait, === is coming for strict check hehe */

// console.log("2" === 2); //output: false coz it checked the data type also







