import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
    const [message, setMessage] = useState('')
    const [aboutUs, setAboutUs] = useState({
        title: '',
        content: ''
    })

    useEffect(() => {
        // fetch('http://localhost:3000')
        //     .then(response => response.json())
        //     .then(data => setMessage(data.message))

        axios.get('http://localhost:3000')
            .then(data => {
                // console.log(data)
                setMessage(data.data.message)
            })
        
        // fetch('http://localhost:3000/about')
        //     .then(response => response.json())
        //     .then(result => {
        //         // console.log(result)
        //         setAboutUs(result)
        //     })

        axios.get('http://localhost:3000/about')
            .then(result => {
                // console.log(result)
                setAboutUs(result.data)
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
                    <h3>{message}</h3>
                </div>
            </div>

            <div className="block">
                <p className="block-title">GET /about</p>
                <div className="content">
                    <h3>{aboutUs.title}</h3>
                    <p>{aboutUs.content}</p>
                </div>
            </div>
        </>
    )
}

export default App
