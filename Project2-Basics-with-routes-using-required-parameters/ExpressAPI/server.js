const express = require('express')
const cors = require('cors')

const app = express()
const port = 3001

app.use(cors())

// GET http://localhost:3001/power/10
// GET http://localhost:3001/power/9
// GET http://localhost:3001/power/2
// GET http://localhost:3001/power/25
app.get('/power/:number', (req, res) => {
    // console.log(req)
    // console.log(req.params)
    // console.log(req.params.number)
    // res.send('Power route is called')

    const number = parseInt(req.params.number)
    const result = Math.pow(number, 2)
    res.send({ number, result })
})

app.listen(port, () => {
    console.log(`Project 2 running on http://localhost:${port}`)
})
