let date = new Date

// console.log(date); //output: 2023-11-08T17:14:13.371Z (current date and time)

// console.log(date.toString()); output:Wed Nov 08 2023 22:16:38 GMT+0500 (Pakistan Standard Time) //(current date,time,timeZone)

// console.log(date.toDateString());  output:Wed Nov 08 2023 //complete date only(day,date,month,year)

// console.log(date.toLocaleString());// output: 08/11/2023, 10:19:06 pm

// console.log(date.toLocaleDateString()); // output: 08/11/2023

// console.log(date.toTimeString()); // output: 22:23:04 GMT+0500 (Pakistan Standard Time)

// console.log(date.toLocaleTimeString()) // Converts a time to a string by using the current or specified locale, output:10:52:16 pm



// console.log(date.getDay()); //output : 3 (current day of week) (starts from monday)

// console.log(date.getDay()+1); //output : 4 

// console.log(date.getDate()); //output : 8 (current date)


// console.log(date.getFullYear()); //output: 2023 (current year)

// console.log(date.getMinutes()); // get minutes of current time for example extract 31 from 10:31 AM or PM, following two on same pattern
// console.log(date.getHours());
// console.log(date.getSeconds());



// console.log((date.getTime()); // Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.

// console.log(Math.floor(date.getTime() / 1000)); // Returns the stored time value in seconds (without decimal points) since midnight, January 1, 1970 UTC.



// console.log(typeof (date.toJSON())); // type:string






let myCreatedDate = new Date(2023,0,23)

// console.log(myCreatedDate.toDateString());


// let myCreatedDate = new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleString());


// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());


let myNewCreatedDate = new Date("01-13-2023")
// console.log(myNewCreatedDate.toString());

// console.log(myNewCreatedDate.getMonth())

let myTimeStamps = Date.now()

// console.log(myTimeStamps);


let myName = new String("Asad Riaz")

