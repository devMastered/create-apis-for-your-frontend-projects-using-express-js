const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())

// http://localhost:3000/
app.get('/', (req, res) => {
    // console.log('maybe?')
    
    // res.send('Hello Express!')
    // res.json({message: 'Hello Express with JSON!'})

    // return res.send('first message')
    // return res.send('second message')

    // res.send('message')
    // res.json({message: 'some content'})

    res.send({message: 'different message'})
})

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})
