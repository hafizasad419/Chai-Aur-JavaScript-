console.log("Asad");//test




// start

const accountId = 785603;
/* accountId = 775677; will throw error coz value of constant can not be changed*/
// console.log(accountId);

let accountEmail = "asad@google.com"; //Block scoped (recommended)
accountEmail = "asad@fb.com";

var accountPassword = "717010"; //Global scoped (NOT recommended)
accountPassword = "414141";

/* accountCity  = Islamabad; not allowed to do (assigning value without declaring is not allowed)*/

console.table([accountEmail, accountId, accountPassword]);


// Prefer to use "let" and prefer NOT to use "var".