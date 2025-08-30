import { useRef } from "react"

const SumOfTwoNumbers = () => {
    const firstInputRef = useRef()
    const secondInputRef = useRef()

    const formSubmitHandler = (event) => {
        event.preventDefault()
        
        // console.log(firstInputRef)

        let number1 = firstInputRef.current.value
        let number2 = secondInputRef.current.value
        // console.log({ number1, number2 })

        fetch(`http://localhost:3001/sum/${number1}/${number2}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => console.log('Error:', error))
    }

    return (
        <div className="block">
            <p className="block-title">GET /sum/:num1/:num2</p>
            <div className="content">
                <p>Please enter two numbers to get their sum.</p>
            </div>
            <form onSubmit={formSubmitHandler} className="update">
                <input type="number" ref={firstInputRef} placeholder="Enter first number" />
                <input type="number" ref={secondInputRef} placeholder="Enter second number" />
                <button type="submit">Get sum</button>
            </form>
        </div>
    )
}

export default SumOfTwoNumbers
