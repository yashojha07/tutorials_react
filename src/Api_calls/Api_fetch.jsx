import { useEffect, useState } from "react";
import { Arr } from './api_file'



export const Api = ({trigger,setTrigger}) => {
    //fetched data using async and await-->modern way of handling asynchronous operations
    let api = 'https://jsonplaceholder.typicode.com/posts/1/comments'
    // const [state, setstate] = useState([]);
    // const dataFetch = async () => {
    //     try {
    //         let response = await fetch(api)
    //         let data = await response.json();
    //         console.log(data);
    //         setstate(data);

    //     } catch (error) {

    //     }
    // }

    // useEffect(() => {
    //     dataFetch();
    // }, [api])

    // useEffect(() => {
    //     fetch(api).then((response) => response.json()).then((data) => {
    //         console.log("then methord", data)
    //     })
    // }, [api])
   

    //GET Methord

    useEffect(() => {
        fetch(api, {
            method: "GET",
            headers: {
                'Content-Type': 'Application/json'
            }
        }).then((response) => response.json()).then((data) => {
            console.log("then methord", data)
            //you can perform your required task here
        })
    }, [api])


    // console.log("hehe",Arr);

    

    //POST METHORD:
   let [name,setname]= useState("");
   let [email,setemail]= useState("");
   let [phn,setphn]=useState("");

   const SaveUser=()=>{
    let data = {name,email,phn};
    fetch('http://localhost:3000/user',{
        method:"Post",
        headers:{
            'accept':'application/json',
            'content-type':'Application/json'

        }
        ,
        body:JSON.stringify(data)
    }).then((response)=>response.json().then((result)=>{
        console.log(result)
    }))
   }

  


    return (
        <div classname="api-call">
           <input placeholder="name" type="text" name="name" value={name} onChange={(e)=>{
            setname(e.target.value)
           }}/> <br/><br/>
           <input placeholder="email" type="text" name="email" value={email}onChange={(e)=>{
            setemail(e.target.value)
           }} /><br/><br/>
           <input placeholder="phn" type="text" name="phn" value={phn} onChange={(e)=>{
            setphn(e.target.value)
           }}/><br/><br/>
           
           <button onClick={()=>{
            SaveUser();
            setTrigger(!trigger);
           }}>CLICK ME TO SUBMIT DATA</button>
        </div>
    );
}




/*How to Consume REST API’s in React
You can consume REST APIs in a React application in a variety of ways, but in this guide, we will look at two of the most popular approaches: Axios (a promise-based HTTP client) and Fetch API (a browser in-built web API).*/