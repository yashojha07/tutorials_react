import { useState } from "react"

export const UseStateTut = ()=>{
    const [count,setCount] = useState(0)
    return <div>
      <p>You can change the count based on clicks</p>
      <button onClick={()=>{
        setCount(count-1)
      }}>CLICK TO DECREASE </button>
      <p>Count is : {count}</p>
      <button onClick={()=>{
        setCount(count+1)
      }}>CLICK ME TO DECREASE </button>
    </div>
}