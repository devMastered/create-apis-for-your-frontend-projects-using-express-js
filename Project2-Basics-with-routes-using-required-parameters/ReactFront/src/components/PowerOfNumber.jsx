import { useRef, useState } from "react"

const PowerOfNumber = () => {
    const [numbers, setNumbers] = useState({
        number: undefined,
        result: undefined
    })

    const numberRef = useRef()

    const formSubmitHandler = (event) => {
        event.preventDefault()
        // console.log(numberRef)
        // console.log(numberRef.current.value)

        let num = numberRef.current.value

        if (!num) {
            alert('Please enter a number!')
            return
        }

        // fetch(`http://localhost:3001/power/${num}`)

        fetch('http://localhost:3001/power/' + num)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setNumbers(data)
                numberRef.current.value = ''
            })
            .catch(error => console.log('Error:', error))
    }

    return (
        <div className="block">
            <p className="block-title">GET /power/:number</p>
            <div className="content">
                {
                    numbers.result &&
                    <>
                        <h3>Number is: {numbers.number}</h3>
                        <p>It's power: {numbers.result}</p>
                    </>
                }
                {
                    !numbers.result &&
                    <p>Please enter a number, to get it's power of 2.</p>
                }
            </div>
            <form onSubmit={formSubmitHandler} className="update">
                <input ref={numberRef} type="number" min={0} placeholder="Enter a number" />
                <button type="submit">Get power</button>
            </form>
        </div>
    )
}

export default PowerOfNumber
