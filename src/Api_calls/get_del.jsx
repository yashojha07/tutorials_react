import { useEffect, useState } from "react";

export const FetchApi=({trigger,setTrigger})=>{
   
   let [states,setState]= useState([]);
    const ApiFetch=()=>{
       
        fetch('http://localhost:3000/user',{
            method:"Get",
            headers:{
                "Accept":"Application/json",
                "Content-Type":"Application/json"
            }

        }).then((response)=>response.json().then((result)=>{
             setState(result);
             console.log(result);
        }))

       
    }
    useEffect(()=>{
        ApiFetch();
    },[trigger])

    const Del=(id)=>{
        fetch(`http://localhost:3000/user/${id}`,{
            method:"DELETE"
        }).then((response)=>response.json().then((result)=>{
            console.log("OBJECT DELETED IS", result)
        }))
    }

    return (<div>
         <table style={{border: "1px solid black"}}>
            <tbody style={{border: "1px solid black"}}>
            <tr style={{border: "1px solid black"}}>
                <td  style={{border: "1px solid black"}}>ID </td>
                <td style={{border: "1px solid black"}}>Name </td>
                <td style={{border: "1px solid black"}}>Email </td>
                <td style={{border: "1px solid black"}}>Phn </td>
                <td style={{border: "1px solid black"}}> BTN</td>
            </tr>
            {
                states.map((item,id)=>(
                    <tr key={id} style={{border: "1px solid black"}}>
                        <td style={{border: "1px solid black"}}>{item.id}</td>
                    <td style={{border: "1px solid black"}}>{item.name}</td>
                    <td style={{border: "1px solid black"}}>{item.email}</td>
                    <td style={{border: "1px solid black"}}>{item.phn}</td>
                    <td style={{border: "1px solid black"}}><button onClick={()=>{
                        Del(item.id);
                        setTrigger(!trigger);
                        
                    }}>DEL</button></td>
                    </tr>
                ))
            }
            
            </tbody>
         </table>
    </div>);
}