
const PowerOfNumber = () => {
    return (
        <div className="block">
            <p className="block-title">GET /power/:number</p>
            <div className="content">
                <p>Please enter a number, to get it's power of 2.</p>
            </div>
            <form className="update">
                <input type="number" min={0} placeholder="Enter a number" />
                <button type="submit">Get power</button>
            </form>
        </div>
    )
}

export default PowerOfNumber
