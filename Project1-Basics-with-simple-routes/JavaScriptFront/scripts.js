// ========================================================
// EXAMPLE - HOME PAGE CONTENT
// ========================================================

fetch('http://localhost:3000')
    .then(response => response.json())
    .then(result => {
        // console.log('DATA FROM API:', result)
        document.querySelector('.example-home .content').innerHTML = `
            <h3>${result.message}</h3>
        `
    })
