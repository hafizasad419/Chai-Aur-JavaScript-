// function fetchData() {
//     let xhr = new XMLHttpRequest();
//     let apiLink = 'https://api.github.com/users/hiteshchoudhary';

//     xhr.onload = function () {
//         if (xhr.status >= 200 && xhr.status < 300) {
//             // Check if the request was successful
//             let data = JSON.parse(xhr.responseText);
//             console.log(data);
//         } else {
//             // Handle error cases
//             console.error('Request failed with status:', xhr.status);
//         }
//     };

//     xhr.open('GET', apiLink);
//     xhr.send();
// }

// let button = document.querySelector('.button');

// // Use a function reference for the event listener, not the result of calling fetchData()
// button.addEventListener('click', fetchData);



function fetchData() {
    let xhr = new XMLHttpRequest();
    let link = 'https://api.github.com/users/hiteshchoudhary';

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            let data = JSON.parse(xhr.responseText)
            // console.log(data);
            // console.log(data.avatar_url);


            document.querySelector('#heading').innerHTML = `<h1 id="heading">${data.name}</h1>`
            document.querySelector('.followers').innerHTML = `<p class="followers"><strong>Github Followers: ${data.followers}</strong></p>`
        }
    }

    xhr.open('GET', link);
    xhr.send()

}

let button = document.querySelector('.button')

button.addEventListener('click', fetchData)









