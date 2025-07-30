const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    // res.send('Hello Express!')
    res.json({message: 'Hello Express with JSON!'})
})

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})
