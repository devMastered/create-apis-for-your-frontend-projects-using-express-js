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
