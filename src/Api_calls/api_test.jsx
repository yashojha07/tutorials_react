import { useEffect, useState } from "react"

export const ApiTest = () => {
  
    //GET
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: "GET",
            headers: {
                'content-type': "Application/Json"
            }
        }).then((response) => {
            return response.json()
        }).then((result) => {

            console.log(result)
        })
    }, [])

    //POST METHORD:
//     const [state,setstate]= useState(false)

//     function post(){
//         fetch('http://localhost:3000/posts',{
//             method:"POST",
//             headers:{
//                 "content-type":"Application/Json"
//             },
//             body:JSON.stringify({name:"VASHISTHA", age:"22"})
//           })
//     }

//     useEffect(()=>{
//         post()
// },[state])


//DELETE METHORD

const id = 22

 useEffect(()=>{
     fetch(`http://localhost:3000/posts/${id}`,{
        method:"DELETE"
     })
 },[id])

    return <div>
        HELLO WORLD
        
        {/* <button onClick={()=>{
          setstate(!state);
        }}>click me</button> */}
        

    </div>
}