const myName = "Asad"

const repoCount = 50;

// console.log(`My Name is ${myName} and my repocount is ${repoCount}`);

const CityName = new String('Islamabad')

// console.log (CityName.indexOf('am'));
// console.log (CityName.includes ('Islamabad'))

// if ((CityName.includes ('Islamabad'))) {
//     console.log("City Is Islamabad");
// } else {
//     "City is not Islamabad"
// }


//  Please do study all methods of string (strongly recommended)


// let's do it //

// let TeamName = "Pakistan"

let TeamName = new String("Pakistan")
let AnotherTeamName = new String("England")
let AnotherTeamNamee = new String("Australia")


// console.log(TeamName.charAt(4)); //gives substring at index value.

// console.log(TeamName.charCodeAt(0)); // retrieve unicode  value of given index number

// console.log(TeamName.concat(AnotherTeamNamee, AnotherTeamName)); // adds strings, but   `My Favorite Team is,${TeamName}`   this syntax is recommended.

// console.log( `My Favorite Team is ${TeamName}`); output: yeah you guessed it right (My Favorite Team is Pakistan)

                                //    P  a  k  i  s  t  a  n
                 //index        //    0  1  2  3  4  5  6  7

// console.log(TeamName.indexOf("n")); // gives the index of substring.

// console.log(TeamName.slice(3)); // It will show the string from starting index value to so on, also accept end value but it does not include end index character.

// console.log(TeamName.substring(0,4)); //It will extract the specified number of chatracters from a string starting at specific index value. the character at end value index will not be fetched.


// console.log(TeamName.toUpperCase()); // converts entire string to uppercase

// console.log(TeamName.toLowerCase()); // converts entire string to lowercase

let myAddress = "         Ghauri Town Phase 7"

// console.log(myAddress.trim()); // Removes the leading and trailing white space and line terminator characters from a string.


let UserAddress = "Alipur-faraash-islamabad"

// console.log(UserAddress.split('-')); 
// it splits a string into substrings using the specified separator and return them as an array.

// console.log(UserAddress.startsWith('A'));//output: true
// console.log(UserAddress.endsWith('a'));  // output: false

// console.log(UserAddress.includes('a','p')); //Returns true if searchString 'a' , 'b' whatever appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.


// console.log(myName.padStart(100)); it gives Padding to the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the start (left) of the current string.

// console.log(myName.repeat(10));  Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.

// console.log(myName.replace('s','h')); replaces one(first) substring with other(second)

// console.log(myName.toLocaleLowerCase()); Converts all alphabetic characters to lowercase, taking into account the host environment's current locale. (same goes for UpperCase)



let balance = 5000000

// console.log(balance.toLocaleString('en-IN')); Converts a number to a string by using the current or specified locale.









