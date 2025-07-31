import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
    const [message, setMessage] = useState('')

    useEffect(() => {
        // fetch('http://localhost:3000')
        //     .then(response => response.json())
        //     .then(data => setMessage(data.message))

        axios.get('http://localhost:3000')
            .then(data => {
                // console.log(data)
                setMessage(data.data.message)
            })
    }, [])

    return (
        <>
            <div className="block title">
                <div className="content">
                    <h2>Simple Routes</h2>
                </div>
            </div>

            <div className="block">
                <p className="block-title">GET /</p>
                <div className="content">
                    <h2>{message}</h2>
                </div>
            </div>
        </>
    )
}

export default App
