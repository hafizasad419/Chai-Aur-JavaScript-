// // let promise = new Promise(function (resolve, reject) {
// //     setTimeout(function () {
// //         // console.log(`Async Task Completed`);
// //         resolve({ myName: "Asad", myAge: 19 })
// //     }, 2000);
// // })

// // promise.then(function (myObj) {
// //     // console.log(myObj.myName);
// // })

// // let promise2 = new Promise(function (resolve, reject) {
// //     setTimeout(function () {
// //         // console.log(`Error will be printed`);
// //         reject(new Error("Something went wrong"))
// //     }, 2000);

// // })
// // promise2.catch(function (error) {
// //     // console.log(error.message);
// // })


// let promise3 = new Promise(function (resolve, reject) {
//     let myJSObj = { language: "My Language Is JavaScript", env: "nodeJS", year: "2023" };
//     resolve(myJSObj);
// })

// promise3.then(function (resolveObj) {
//     return (resolveObj.language);
// })
//     .then(function (thenObj) {
//         console.log(thenObj);
//     })
//     .catch((error) => (console.log(error)))
//     .finally(() => (console.log(`finally executed`)))


// let promise4 = new Promise(function (resolve, reject) {
//     //async task
//     let success = true;
//     // success = false;
//     if (success) {
//         resolve(`Operation Succeeded`)
//     } else {
//         reject(`Operation Failed`)
//     }

// })

// promise4.then(function (resolveData) {
//     console.log(resolveData);
// })
// .catch(function (error) {
//         console.log(error); //error is rejectData
//     })






