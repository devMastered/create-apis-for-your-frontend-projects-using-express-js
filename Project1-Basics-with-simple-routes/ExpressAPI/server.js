const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())

// GET http://localhost:3000/
app.get('/', (req, res) => {
    // console.log('maybe?')
    
    // res.send('Hello Express!')
    // res.json({message: 'Hello Express with JSON!'})

    // return res.send('first message')
    // return res.send('second message')

    // res.send('message')
    // res.json({message: 'some content'})

    res.send({message: 'Hello world!'})
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

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})
