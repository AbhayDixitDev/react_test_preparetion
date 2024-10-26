import { useContext } from "react"
import { themeContext } from "../themeContext"

const Contact = () => {
    const {color,setColor}=useContext(themeContext);
    return (
       <>
       <h3 style={{color:color}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quo corporis nihil ut exercitationem blanditiis, culpa fugit voluptatum atque praesentium ea qui soluta impedit consectetur? Nemo modi quis ad quibusdam!</h3>
       <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} />
       </>
    )
}

export default Contact