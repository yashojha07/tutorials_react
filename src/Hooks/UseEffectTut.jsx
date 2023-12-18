import axios from "axios";
import { useEffect, useState } from "react";

/*
The useEffect hook in React is use to handle the side effects in React such as fetching data, and updating DOM. This hook runs on every render but there is also a way of using a dependency array using which we can control the effect of rendering
*/

const API= `https://jsonplaceholder.typicode.com/posts`;
export const UseEffectTut = ()=>{
    const [data,setData] = useState([]);
     useEffect(()=>{
     axios.get(API).then((res)=>{
        console.log(res);
        setData(res.data);
     })
     },[])

    return <div style={{ display: "flex", justifyContent: "center", alignItems: "center",flexDirection:"column" }}>
        <h4>Hi yash Lets learn useEffect Hooks</h4>
        {data?.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>


}


/*

**********************************************USELAYOUTEFFECTHOOK**********************************


The useLayoutEffect hook is similar to the useEffect hook in React, but it is synchronous and runs immediately after the DOM has been updated but before the browser paints the updated content on the screen. This can be particularly useful when you need to perform operations that require access to the DOM and want to make sure those operations happen synchronously.------------------->>><<<<---------------------------->>>><<<<<--------------

*/