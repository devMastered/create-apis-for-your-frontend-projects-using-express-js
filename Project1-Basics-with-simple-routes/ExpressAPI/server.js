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

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})
