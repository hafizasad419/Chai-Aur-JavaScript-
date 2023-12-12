// let promise1 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve("Promise resolved"), 1000)
// })


// let promise2 = new Promise(function (resolve, reject) {

//     setTimeout(() => reject(new Error("Whoops!")), 3000)
// })

// promise1.then(
//     function (result) {
//         console.log(result)
//     })


// promise2.catch(
//     function (reject) {
//         console.log(reject.message)
//     })




// let promise3 = new Promise(function (resolve, reject) {
//     setTimeout(() => (resolve("Promise is resolved")), 2000)
//     setTimeout(() => (reject(new Error("Oops, An Error occured"))), 3000)
// })

// promise3.then(
//     function (result) {
//         // console.log(result);
//     }
// )
//     .catch(
//         function (reject) {
//             // console.log(reject.message)
//         })
// //this .catch will not execute because the same promise has been resolved.


// let promise4 = new Promise(function (resolve, reject) {

//     setTimeout(
//         function () {

//             resolve({ username: "Asad", email: "hafizasad@419@gmail.com" })

//         }, 2000)
// })

// promise4.then(
//     function (userObj) {
//         // console.log(userObj);
//         // console.log(userObj.username);
//     }
// )



// let promise5 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         error = false
//         if (!error) {
//             resolve(`Resolve Executed`)
//         } else {
//             reject(`An error occured`)
//         }
//     }, 2000)
// })

// // consuming or using promises with .then and .catch
// promise5
// .then((message) => (console.log(message)))
// .catch((error) => (console.log(error)));



// let promise6 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//      let error = true
//      error = false
//         if (error == false) {
//             resolve(`Resolve Executed`)
//         } else {
//             reject(`Sorry, Something went wrong`)
//         }
//     }, 1000)
// })


// // consuming or using promises with async await

// async function consumePromise6() {
//     try {
//         let response = await promise6
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromise6()





// let promiseN = new Promise(function (resolve, reject) {
//     let myName = "Asad"

//     if (myName === "Asad") {
//         resolve(`Your Name is Asad`)
//     } else {
//         reject(`Error, Your Name is not Asad`)
//     }
// })

// promiseN
// .then(function (message) {
//     console.log(message);
// })
// .catch(function(errMsg){
//     console.log(errMsg);
// })


async function getMyNameAndLocation(params) {
    try {
        let response = await fetch('https://api.github.com/users/hafizasad419');
        // throw new Error("This is a deliberate error for testing purposes");
        let data = await response.json()
        console.log(`My Name on Github is ${data.name} and My location is ${data.location}`);
    } catch (error) {
        console.log(`"Oops! Something went wrong, and our team of highly trained monkeys is on it`);
    }
}

// getMyNameAndLocation()


//To do same task with .then and .catch (it is easy and recommended)


fetch('https://api.github.com/users/hiteshchoudhary')
    .then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(`My JavaScript Teacher Is ${data.name} and his location is ${data.location}.`);
    })
    .catch(function (error) {
        console.log(`Error: Something went wrong. We blame it on the aliens`);
    })
    .finally() //optional