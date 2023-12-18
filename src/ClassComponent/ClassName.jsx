
import React from "react";


export default class ClassName extends React.Component{
    constructor(){
      super();
      console.log("Constructor call")
      this.state = {
        name:"yash",
        age:22
      }
    }

    render(){
        console.log("render")
        return (
            <div>
             <h1>Hello this is ClassName</h1>
             <p>{this.state.name}</p>
            </div>
        );
    }
    




}