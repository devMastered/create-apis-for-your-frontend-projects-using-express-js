// ========================================================
// EXAMPLE - POWER OF A NUMBER
// ========================================================

const powerBlock = document.querySelector('.example-power')

powerBlock.querySelector('.update').addEventListener('submit', (e) => {
    e.preventDefault()

    const numberInput = powerBlock.querySelector('input#power-number')

    // console.dir(numberInput)

    if (!numberInput.value) {
        alert('Please enter a number!')
        return
    }

    // fetch(`http://localhost:3001/power/${numberInput.value}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         // console.log(data)
    //         powerBlock.querySelector('.content').innerHTML = `
    //                 <h3>Number is: ${data.number}</h3>
    //                 <p>It's power: ${data.result}</p>
    //             `
    //         numberInput.value = ''
    //     })
    //     .catch(error => console.log('Error:', error))

    axios.get(`http://localhost:3001/power/${numberInput.value}`)
        .then(response => {
            // console.log(response)
            powerBlock.querySelector('.content').innerHTML = `
                    <h3>Number is: ${response.data.number}</h3>
                    <p>It's power: ${response.data.result}</p>
                `
            numberInput.value = ''
        })
        .catch(error => console.log('Error:', error))
})

// ========================================================
// EXAMPLE - SUM OF TWO NUMBERS
// ========================================================

const sumBlock = document.querySelector('.example-sum')

sumBlock.querySelector('.update').addEventListener('submit', (e) => {
    e.preventDefault()

    let num1Input = sumBlock.querySelector('input#sumNumber1')
    let num2Input = sumBlock.querySelector('input#sumNumber2')

    // console.log({num1Input, num2Input})

    if (!num1Input.value || !num2Input.value) {
        alert('Please enter both numbers!')
        return
    }

    // fetch(`http://localhost:3001/sum/${num1Input.value}/${num2Input.value}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         // console.log(data)
    //         sumBlock.querySelector('.content').innerHTML = `
    //             <h3>Sum of ${data.number1} and ${data.number2} is: ${data.result}</h3>
    //         `
    //         num1Input.value = ''
    //         num2Input.value = ''
    //     })
    //     .catch(error => console.log('Error:', error))

    axios.get(`http://localhost:3001/sum/${num1Input.value}/${num2Input.value}`)
        .then(response => {
            // console.log(response)
            sumBlock.querySelector('.content').innerHTML = `
                <h3>Sum of ${response.data.number1} and ${response.data.number2} is: ${response.data.result}</h3>
            `
            num1Input.value = ''
            num2Input.value = ''
        })
        .catch(error => console.log('Error:', error))
})

// ========================================================
// EXAMPLE - REVERSED WORD
// ========================================================

const textBlock = document.querySelector('.example-reversed')

textBlock.querySelector('.update').addEventListener('submit', (e) => {
    e.preventDefault()

    let wordInput = textBlock.querySelector('input#wordInput')

    if (!wordInput.value) {
        alert('Please enter a word!')
        return
    }

    axios.get(`http://localhost:3001/reversed/${wordInput.value}`)
        .then(({ data }) => {
            // console.log(data)
            textBlock.querySelector('.content').innerHTML = `
                <h3>Original word: ${data.word}</h3>
                <p>Reversed word: ${data.reversed}</p>
                <p>Number of letters: ${data.letters}</p>
            `
            wordInput.value = ''
        })
        .catch(error => console.log('Error:', error))
})

// ========================================================
// EXAMPLE - MULTIPLY TWO NUMBERS
// ========================================================

const multiplyBlock = document.querySelector('.example-multiply')

multiplyBlock.querySelector('.update').addEventListener('submit', (e) => {
    e.preventDefault()

    let num1Input = multiplyBlock.querySelector('input#multiplyNumber1')
    let num2Input = multiplyBlock.querySelector('input#multiplyNumber2')

    if (!num1Input.value || !num2Input.value) {
        alert('Please enter both numbers!')
        return
    }

    axios.get(`http://localhost:3001/multiply/${num1Input.value}/${num2Input.value}`)
        .then(({ data }) => {
            // console.log(data)
            multiplyBlock.querySelector('.content').innerHTML = `
                <h3>Multiplication of ${data.a} and ${data.b} is: ${data.result}</h3>
            `
            num1Input.value = ''
            num2Input.value = ''
        })
        .catch(error => console.log('Error:', error))
})

