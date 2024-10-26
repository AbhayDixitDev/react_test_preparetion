import { useState } from "react"
const About = () => {
    const [count, setCount] = useState(0)

    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <button onClick={() => setCount(count - 1)}>-</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>

        </div>
    )
}

export default About