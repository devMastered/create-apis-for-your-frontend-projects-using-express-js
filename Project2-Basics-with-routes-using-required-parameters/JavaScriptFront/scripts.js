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

    fetch(`http://localhost:3001/power/${numberInput.value}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            powerBlock.querySelector('.content').innerHTML = `
                    <h3>Number is: ${data.number}</h3>
                    <p>It's power: ${data.result}</p>
                `
            numberInput.value = ''
        })
        .catch(error => console.log('Error:', error))
})
