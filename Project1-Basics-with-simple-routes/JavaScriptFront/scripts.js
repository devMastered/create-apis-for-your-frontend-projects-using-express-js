// ========================================================
// EXAMPLE - HOME PAGE CONTENT
// ========================================================

// fetch('https://devmastered-express.up.railway.app')
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

axios.get('https://devmastered-express.up.railway.app')
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

// fetch('https://devmastered-express.up.railway.app/about')
//     .then(response => response.json())
//     .then(result => {
//         // console.log(result)
//         document.querySelector('.example-about .content').innerHTML = `
//             <h3>${result.title}</h3>
//             <p>${result.content}</p>
//         `
//     }).catch(error => console.error('Error:', error))

axios.get('https://devmastered-express.up.railway.app/about')
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

// fetch('https://devmastered-express.up.railway.app/contact')
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

axios.get('https://devmastered-express.up.railway.app/contact')
    .then(result => {
        // console.log(result.data)
        document.querySelector('.example-contact .content').innerHTML = `
            <h3>${result.data.title}</h3>
            <p>Phone: ${result.data.phone}</p>
            <p>Email: ${result.data.email}</p>
        `
    })

// ========================================================
// EXAMPLE - STORE DETAILS CONTENT
// ========================================================

// fetch('https://devmastered-express.up.railway.app/store/details')
//     .then(response => response.json())
//     .then(result => {
//         // console.log(result)
//         document.querySelector('.example-store-details .content').innerHTML = `
//             <h3>${result.name}</h3>
//             <p>Location: ${result.location}</p>
//             <p>Opening hours: ${result.openingHours}</p>
//         `
//     })

axios.get('https://devmastered-express.up.railway.app/store/details')
    .then(result => {
        // console.log(result)
        let store = result.data;
        // console.log(store)
        document.querySelector('.example-store-details .content').innerHTML = `
            <h3>${store.name}</h3>
            <p>Location: ${store.location}</p>
            <p>Opening hours: ${store.openingHours}</p>
        `
    })

// ========================================================
// EXAMPLE - PRODUCT CONTENT
// ========================================================

// fetch('https://devmastered-express.up.railway.app/product')
//     .then(response => response.json())
//     .then(result => {
//         // console.log(result)
//         document.querySelector('.example-product .content').innerHTML = `
//             <h3>Product name: ${result.name} (id: ${result.id})</h3>
//             <p>Price: ${result.price} EUR</p>
//             <p>Is in stock? - ${result.inStock ? 'Yes' : 'No'}</p>
//         `
//     })

axios.get('https://devmastered-express.up.railway.app/product')
    .then(({data}) => {
        // console.log(data)
        document.querySelector('.example-product .content').innerHTML = `
            <h3>Product name: ${data.name} (id: ${data.id})</h3>
            <p>Price: ${data.price} EUR</p>
            <p>Is in stock? - ${data.inStock ? 'Yes' : 'No'}</p>
        `
    })

// ========================================================
// EXAMPLE - USER DETAILS CONTENT
// ========================================================

// fetch('https://devmastered-express.up.railway.app/user/details')
//     .then(response => response.json())
//     .then(result => {
//         // console.log(result)
//         document.querySelector('.example-user-details .content').innerHTML = `
//             <h3>User "${result.username}" details</h3>
//             <p>Age: ${result.age}</p>
//             <p>Hobbies: ${result.hobbies.join(', ')}</p>
//         `
//     })

axios.get('https://devmastered-express.up.railway.app/user/details')
    .then(result => {
        let user = result.data
        // console.log(result)
        document.querySelector('.example-user-details .content').innerHTML = `
            <h3>User "${user.username}" details</h3>
            <p>Age: ${user.age}</p>
            <p>Hobbies: ${user.hobbies.join(', ')}</p>
        `
    })

// ========================================================
// EXAMPLE - LATEST BLOG POST CONTENT
// ========================================================

// fetch('https://devmastered-express.up.railway.app/blog/latest')
//     .then(response => response.json())
//     .then(blogPost => {
//         // console.log(blogPost)
//         document.querySelector('.example-blog-latest .content').innerHTML = `
//             <h3>Latest Blog Post</h3>
//             <p><strong>Title:</strong> ${blogPost.title}</p>
//             <p><strong>Author:</strong> ${blogPost.author}</p>
//             <p><strong>Published:</strong> ${blogPost.published}</p>
//             <p><strong>Tags:</strong> ${blogPost.tags.join(', ')}</p>
//         `
//     })

axios.get('https://devmastered-express.up.railway.app/blog/latest')
    .then(result => {
        let blogPost = result.data
        // console.log(blogPost)
        document.querySelector('.example-blog-latest .content').innerHTML = `
            <h3>Latest Blog Post</h3>
            <p><strong>Title:</strong> ${blogPost.title}</p>
            <p><strong>Author:</strong> ${blogPost.author}</p>
            <p><strong>Published:</strong> ${blogPost.published}</p>
            <p><strong>Tags:</strong> ${blogPost.tags.join(', ')}</p>
        `
    })
