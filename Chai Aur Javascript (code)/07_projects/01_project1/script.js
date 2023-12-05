let buttons = document.querySelectorAll('.button')
let body = document.querySelector('body')


// buttons.forEach((button) => {
//     button.addEventListener('click', function (e) {
//         if (e.target.id === "grey") {
//             body.style.backgroundColor = "grey"
//         } 
//         else if (e.target.id === "white") {
//             body.style.backgroundColor = "white"
//         }
//         else if (e.target.id === "blue") {
//             body.style.backgroundColor = "blue"
//         }
//         else if (e.target.id === "yellow") {
//             body.style.backgroundColor = "yellow"
//         } else {
//             body.style.backgroundColor = "orange"
//         }

//     })
// })

//doing the same with swtch statement

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        switch (event.target.id) {
            case "grey":
                body.style.backgroundColor = event.target.id

                break;
            case "white":
                body.style.backgroundColor = event.target.id

                break;
            case "blue":
                body.style.backgroundColor = event.target.id

                break;
            case "yellow":
                body.style.backgroundColor = event.target.id

                break;

            default:
                body.style.backgroundColor = "orange"
                break;
        }
    })
})