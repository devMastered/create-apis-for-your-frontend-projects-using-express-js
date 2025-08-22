const express = require('express')
const cors = require('cors')

const app = express()
const port = 3001

app.use(cors())

// ========================================================
// Examples of Routes with Required Parameters
// ========================================================

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

// GET http://localhost:3001/multiply/7/8
// GET http://localhost:3001/multiply/2/3
// GET http://localhost:3001/multiply/-9/2
app.get('/multiply/:a/:b', (req, res) => {
    // console.log(req.params)
    // res.send('ok')

    let firstNumber = parseFloat(req.params.a)
    let secondNumber = parseFloat(req.params.b)
    let result = firstNumber * secondNumber
    // res.send({ firstNumber, secondNumber, result })
    res.send({ a: firstNumber, b: secondNumber, result })
})

// GET http://localhost:3001/is-even/5
// GET http://localhost:3001/is-even/7
// GET http://localhost:3001/is-even/4
app.get('/is-even/:number', (req, res) => {
    let number = parseInt(req.params.number)
    // let isEven = number % 2 == 0
    // res.send({ number, isEven })

    if (number % 2 == 0) {
        return res.send({ number, isEven: true })
    } else {
        return res.send({ number, isEven: false })
    }
})

// GET http://localhost:3001/fullname/Ieva/Jaksaityte
// GET http://localhost:3001/fullname/John/Smith
app.get('/fullname/:name/:surname', (req, res) => {
    // let name = req.params.name
    // let surname = req.params.surname
    let { name, surname } = req.params
    // let fullName = name + ' ' + surname
    let fullName = `${name} ${surname}`
    res.send({ name, surname, fullName })
})

// ========================================================
// Tasks
// ========================================================

// Task 1:
// Create a route '/average/:num1/:num2/:num3' which accepts
// three numbers as parameters and returns their average.

app.get('/average/:num1/:num2/:num3', (req, res) => {
    let number1 = parseFloat(req.params.num1)
    let number2 = parseFloat(req.params.num2)
    let number3 = parseFloat(req.params.num3)
    // let result = (number1 + number2 + number3) / 3
    // let result = ((number1 + number2 + number3) / 3).toFixed(2)
    let result = parseFloat(((number1 + number2 + number3) / 3).toFixed(2))
    res.send({ number1, number2, number3, result })
})

// Task 2:
// Create a route '/first-last/:input' which accepts a string
// and returns the first and last letters of that string.

app.get('/first-last/:input', (req, res) => {
    let data = req.params.input
    let first = data[0]
    let last = data[data.length - 1]
    res.send({ data, firstLetter: first, lastLetter: last })
})

// Task 3:
// Create a route '/word-repeat/:word/:count' which accepts a
// word and a count, and returns the word repeated that many times.

app.get('/word-repeat/:word/:count', (req, res) => {
    let word = req.params.word
    let count = parseInt(req.params.count)
    let result = word.repeat(count)
    // let result = req.params.word.repeat(parseInt(req.params.count))
    res.send({ word, count, result })
})

// Task 4:
// Create a route '/word-info/:word' which returns the word in
// uppercase, lowercase, and its length.

app.get('/word-info/:word', (req, res) => {
    let { word } = req.params
    res.send({
        originalWord: word,
        upperCase: word.toUpperCase(),
        lowerCase: word.toLowerCase(),
        length: word.length
    })
})



// ========================================================

app.listen(port, () => {
    console.log(`Project 2 running on http://localhost:${port}`)
})
