import { useRef } from "react"

/*
In React, useRef is a hook that provides a way to create and manage references to DOM elements and other values that persist across renders. Unlike useState, useRef doesn't trigger re-renders when its value changes, making it useful for various purposes, such as accessing and manipulating DOM elements, managing timers, and storing mutable values without causing re-renders.

INSHORT DOM KO HANDLE IN FUNCTIONAL COMPONENT
*/
export const UseRefTut = ()=>{

     const useReff = useRef(null);



    return <div>
    <h3 style={{alignItems:"center"}}>
        hi yash lets learn useRef
    </h3>
     <input type="text" ref={useReff}/>
     <button onClick={()=>{
         console.log(useReff)
         useReff.current.style.color ="red";
     }}>CLICK ME!!</button>

    </div>
}