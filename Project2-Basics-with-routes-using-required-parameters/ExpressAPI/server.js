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

// GET http://localhost:3001/sum/7/5
// GET http://localhost:3001/sum/5/7
app.get('/sum/:num1/:num2', (req, res) => {
    // console.log(req.params)
    // res.send('sum is called')
    res.send(req.params)
})

app.listen(port, () => {
    console.log(`Project 2 running on http://localhost:${port}`)
})
