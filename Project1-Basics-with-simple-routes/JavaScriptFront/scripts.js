// ========================================================
// EXAMPLE - HOME PAGE CONTENT
// ========================================================

// fetch('http://localhost:3000')
//     .then(response => {
//         // console.log(response)
//         return response.json()
//     })
//     .then(result => {
//         // console.log('DATA FROM API:', result)
//         document.querySelector('.example-home .content').innerHTML = `
//             <h3>${result.message}</h3>
//         `
//     })
//     .catch(error => console.log('Error:', error))

axios.get('http://localhost:3000')
    .then(result => {
        // console.log('AXIOS RESULT', result)
        document.querySelector('.example-home .content').innerHTML = `
            <h3>${result.data.message}</h3>
        `
    })
    .catch(error => console.log(error))

// ========================================================
// EXAMPLE - ABOUT CONTENT
// ========================================================

// fetch('http://localhost:3000/about')
//     .then(response => response.json())
//     .then(result => {
//         // console.log(result)
//         document.querySelector('.example-about .content').innerHTML = `
//             <h3>${result.title}</h3>
//             <p>${result.content}</p>
//         `
//     }).catch(error => console.error('Error:', error))

axios.get('http://localhost:3000/about')
    .then(result => {
        // console.log(result)
        document.querySelector('.example-about .content').innerHTML = `
            <h3>${result.data.title}</h3>
            <p>${result.data.content}</p>
        `
    }).catch(error => console.error('Error:', error))

// ========================================================
// EXAMPLE - CONTACT US CONTENT
// ========================================================

// let data = null

// fetch('http://localhost:3000/contact')
//     .then(response => response.json())
//     .then(result => {
//         // console.log('console in then', result)
//         // data = result
//         document.querySelector('.example-contact .content').innerHTML = `
//             <h3>${result.title}</h3>
//             <p>Phone: ${result.phone}</p>
//             <p>Email: ${result.email}</p>
//         `
//     })

// console.log('console after fetch', data)

axios.get('http://localhost:3000/contact')
    .then(result => {
        // console.log(result.data)
        document.querySelector('.example-contact .content').innerHTML = `
            <h3>${result.data.title}</h3>
            <p>Phone: ${result.data.phone}</p>
            <p>Email: ${result.data.email}</p>
        `
    })
