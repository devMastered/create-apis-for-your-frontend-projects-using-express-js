import { useRef, useState } from "react"
import axios from 'axios'

const SumOfTwoNumbers = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(undefined)

    const firstInputRef = useRef()
    const secondInputRef = useRef()

    const formSubmitHandler = (event) => {
        event.preventDefault()
        
        // console.log(firstInputRef)

        let number1 = firstInputRef.current.value
        let number2 = secondInputRef.current.value
        // console.log({ number1, number2 })

        if (!number1 || !number2) {
            alert('Please enter both numbers!')
            return
        }

        setIsLoading(true)

        // fetch(`http://localhost:3001/sum/${number1}/${number2}`)
        //     .then(response => response.json())
        //     .then(res => {
        //         // console.log(res)
        //         setIsLoading(false)
        //         setData(res)
        //         firstInputRef.current.value = ''
        //         secondInputRef.current.value = ''
        //     })
        //     .catch(error => {
        //         console.log('Error:', error)
        //         setIsLoading(false)
        //     })

        axios.get(`http://localhost:3001/sum/${number1}/${number2}`)
            .then(res => {
                // console.log(res)
                setIsLoading(false)
                setData(res.data)
                firstInputRef.current.value = ''
                secondInputRef.current.value = ''
            })
            .catch(error => {
                console.log('Error:', error)
                setIsLoading(false)
            })
    }

    return (
        <div className="block">
            <p className="block-title">GET /sum/:num1/:num2</p>
            <div className="content">
                {
                    !data &&
                    <p>Please enter two numbers to get their sum.</p>
                }
                {
                    isLoading &&
                    <p>Please wait, it is loading...</p>
                }
                {
                    data && !isLoading &&
                    <h3>Sum of {data.number1} and {data.number2} is: {data.result}</h3>
                }
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
