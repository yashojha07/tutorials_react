import React from "react";

export const Compo = ()=>{

    return (
        <div>
            <h1> hi yash Its me functional component</h1>
        </div>
    );
}

  class User extends React.Component{

    constructor(){
        super();
            this.state={
                name:"yash",
                age:22
             }
    }



    render(){
return (
    <div>
   <h4>HII {this.state.name}  its class componet ans your age is {this.state.age}</h4>
   <button onClick={()=>{
    this.setState({name:"shreya"})
   }} onMouseEnter={()=>{this.setState({age:26})}}>Click me to change the name</button>
    
    </div>
);
    }
}


export default User;