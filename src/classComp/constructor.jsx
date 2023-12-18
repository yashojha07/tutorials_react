// import React from "react";

import { useEffect, useState } from "react"

// class Cons extends React.Component{
    
//     constructor(){  //constructor is based on componentdidmount and it is a life cycle methord
//          super();
//          console.log("hello i am constructor")
//          this.state={
//             name:"yash"
//          }
         
//     }

//     render(){
//         return (
//             <div>
//                 <h1>Hello {this.state.name}</h1>
//                 <button onClick={()=>{
//                      this.setState({name:" ojhaa kaisa hai bhai"})
//                 }}>CLICK ME PLEASE</button>
//             </div>
//         );
//     }
// }

// export default Cons;



export const Cons = ()=>{
    const [state,setState]= useState("yash");

   
    return(
        <div>
            <h1>HELLO {state}</h1>
            <button onClick={()=>{
                setState("OJHA, KAISA HAI BHAI");
            }} >PLEASE CLICK ME </button>
        </div>
    );
}