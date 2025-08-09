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
    // res.send(req.params)
    let number1 = parseInt(req.params.num1)
    let number2 = parseInt(req.params.num2)
    let result = number1 + number2
    res.send({ number1, number2, result })
})

// GET http://localhost:3001/reversed/computer
// GET http://localhost:3001/reversed/express
// GET http://localhost:3001/reversed/Ieva
app.get('/reversed/:word', (req, res) => {
    // let word = req.params.word
    let { word } = req.params // object destructuring
    let reversed = word.split('').reverse().join('')
    // let letters = word.length
    res.send({ word, reversed, letters: word.length })
})

app.listen(port, () => {
    console.log(`Project 2 running on http://localhost:${port}`)
})
