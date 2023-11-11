/* singleton objects 
 (objects which are declared with constructor method)*/

// const darazUser = new Object()  //singleton object declaration
let darazUser = {
    username: "Asad Riaz",
    userage: "19",
    userIsLoggedIn: true
}

// we can assign values to objects by using following method also

// darazUser.name = "Asad Riaz"
// darazUser.age = 19
// darazUser.IsLoggedIn = true

// console.log(darazUser);

// now declaring another object

// const darazUser2 = new Object()
let darazUser2 = {
    Teachername: "Hitesh",
    Teacherage: "30",
    TeacherIsLoggedIn: true
}

// we can assign values to objects by using following method also

// darazUser2.name = "Hitesh"
// darazUser2.age = "30"
// darazUser2.IsLoggedIn = false

// console.log(darazUser);


// let BothObjects = Object.assign({}, darazUser, darazUser2)
// console.log(BothObjects);

//following is most used (and recommended) syntax for combining objects

let BothObjects = { ...darazUser, ...darazUser2 }

// console.log(BothObjects); //perfect, and it's easy.

let myCountry = {
    countryName: "Pakistan",
    provinces: ["Punjab", "Balochistan", "Sindh", "KPK", "Gilgit Baltistan"],
    pakistan: {
        punjab: ["Guj", "Lahore", "Rwp"],
        Balochistan: ["quetta", "sibbi"],
        sindh: ["karachi", "hyderabad"],
        kpk: ["Peshawar", "sawat"],
        Gilgit: ["Gilgit", "Baltistan"]
    }
}

let Pakinfo = function () {
    console.log(`I Live In My Beautiful Country ${myCountry.countryName}, It Has 5 Provinces ${myCountry.provinces[0]}, ${myCountry.provinces[1]}, ${myCountry.provinces[2]},${myCountry.provinces[3]} and ${myCountry.provinces[4]}. In ${myCountry.provinces[0]}, there are 3 famous cities, ${myCountry.pakistan.punjab[0]}, ${myCountry.pakistan.punjab[1]} and ${myCountry.pakistan.punjab[2]}. In ${myCountry.provinces[1]}, I know 2 famous cities, ${myCountry.pakistan.Balochistan[0]} and ${myCountry.pakistan.Balochistan[1]}. ${myCountry.provinces[2]}, has two famous cities, first one is ${myCountry.pakistan.sindh[0]}, which is the largest city of ${myCountry.countryName} and second is ${myCountry.pakistan.sindh[1]}. Next Province is "The Province Of Pathans" ${myCountry.provinces[3]}, It's Capital is ${myCountry.pakistan.kpk[0]} and i am not sure whether ${myCountry.pakistan.kpk[1]} is a part of ${myCountry.provinces[3]} or not. ${myCountry.provinces[4]} is relatively new province in ${myCountry.countryName}. Many people don't even know about ${myCountry.provinces[4]}, I have sarcastically divided ${myCountry.provinces[4]} in 2 parts hehe, first one is ${myCountry.pakistan.Gilgit[0]} and second is ${myCountry.pakistan.Gilgit[1]}.`);
}


// Pakinfo()


///   R E V I S I O N    ///

// let sampleObj1 = {
//     sampleName: "Asad"

// }
// let sampleObj2 = {
//     sampleEmail: "hafizasad419@gmail.com"

// }
// let sampleObj3 = {
//     sampleId: 785603

// }

// let sampleObj = { ...sampleObj1, ...sampleObj2, ...sampleObj3 }
// console.log(sampleObj);

//Okay, enough revision
///    L E T ' s       C O N T I N U E  ///


let sampleObj = {
    sampleName: "Asad",

    sample_obj1: {
        name: "asad",
        age: 19,
        userIsLoggedIn: true
    }

}


// console.log(sampleObj);



let users = [
    {
        name1: "asad",
        email1: "asad@asad.com",
        Payment1: "Paid"
    },
    {
        name2: "hitesh",
        email2: "hitesh@hitesh.com",
        Payment2: "Paid"
    },
    {
        name3: "harry",
        email3: "harry@harry.com",
        Payment3: "Paid"
    }
]

// console.log(users[0].name1); // and so on

// console.log(Object.keys(darazUser)[0]);
// console.log(Object.values(darazUser));
// console.log(Object.entries(darazUser)); // rarely used

// console.log(darazUser.hasOwnProperty('username')); // true
// console.log(darazUser.hasOwnProperty('userId')); // false






// D E   S T R U C T U R I N G    O F    O B J E C T S


let {userage, username, userIsLoggedIn} = darazUser

console.log(username);
console.log(userage);
console.log(userIsLoggedIn);
