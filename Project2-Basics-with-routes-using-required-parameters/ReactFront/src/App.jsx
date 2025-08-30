import './App.css'
import PowerOfNumber from './components/PowerOfNumber'
import SumOfTwoNumbers from './components/SumOfTwoNumbers'

function App() {
    return (
        <>
            <div className="block title">
                <div className="content">
                    <h2>Routes with Required Parameters</h2>
                </div>
            </div>

            <PowerOfNumber />
            <SumOfTwoNumbers />
        </>
    )
}

export default App
