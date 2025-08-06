const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = 3000

app.use(cors({
    origin: [
        'http://127.0.0.1:5500',
        'http://localhost:5173',
    ]
}))

console.log(process.env.TEST_VARIABLE)

// =====================================================
// Examples of Simple Routes
// =====================================================

// GET http://localhost:3000/
app.get('/', (req, res) => {
    // console.log('maybe?')
    
    // res.send('Hello Express!')
    // res.json({message: 'Hello Express with JSON!'})

    // return res.send('first message')
    // return res.send('second message')

    // res.send('message')
    // res.json({message: 'some content'})

    // res.send({message: 'Hello world!'})

    res.send({message: 'Hello world from Railway!'})
})

// GET http://localhost:3000/about
app.get('/about', (req, res) => {
    // res.send('hello from about route')
    let data = {
        title: 'About us',
        content: 'We are the best!'
    }
    res.send(data)
})

// GET http://localhost:3000/contact
app.get('/contact', (req, res) => {
    // res.send('ok')
    let title = 'Contact us'
    let phone = '+370 600 00000'
    let email = 'info@devmastered.com'
    // res.send({
    //     title: title,
    //     phone: phone,
    //     email: email,
    // })
    res.send({title, phone, email})
})

// GET http://localhost:3000/unique
app.get('/unique', (req, res) => {
    res.send('first')
})

// GET http://localhost:3000/unique
app.get('/unique', (req, res) => {
    res.send('second')
})

// GET http://localhost:3000/store/details
app.get('/store/details', (req, res) => {
    // res.send('store details')
    let storeDetails = {
        name: 'Super Store',
        location: 'Main Street 123',
        openingHours: '9 AM - 9 PM'
    }
    return res.send(storeDetails)
})

// GET http://localhost:3000/product
app.get('/product', (req, res) => {
    res.send({
        id: 101,
        name: 'Wireless mouse',
        price: 25.99,
        inStock: true
    })
})

// GET http://localhost:3000/user/details
app.get('/user/details', (req, res) => {
    res.send({
        username: 'jane123',
        age: 28,
        hobbies: ['reading', 'cycling', 'gaming']
    })
})

// GET http://localhost:3000/blog/latest
app.get('/blog/latest', (req, res) => {
    let posts = [
        { title: 'Learn HTML and CSS', author: "Ieva Jakšaitytė", published: '2025-01-10', tags: ['html', 'css', 'frontend'] },
        { title: 'How to learn Node.js', author: "Ieva Jakšaitytė", published: '2025-02-01', tags: ['node', 'javascript', 'backend'] },
    ]
    let latestPost = posts[posts.length - 1]
    res.send(latestPost)
})

// =====================================================
// Tasks
// =====================================================

// Task 1:
// Create route '/pet' and return {type: 'Dog', name: 'Rex'}



// Task 2:
// Create route '/car' and return {brand: 'Toyota', model: 'Corolla', year: 2020}



// Task 3:
// Create route '/book' and return {title: '1984', author: 'George Orwell'}



// Task 4:
// Create route '/movie' and
// return {title: 'Inception', director: 'Christopher Nolan', year: 2010}



// Task 5:
// Create route '/student'
// and return {name: 'Austeja', grade: 10, subjects: ['Math', 'Biology']}



// Task 6:
// Create route '/city'
// and return {name: 'Vilnius', population: 580000, country: 'Lithuania'}



// =====================================================

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})
