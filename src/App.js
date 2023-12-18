import { useState } from "react";
import { Api } from "./Api_calls/Api_fetch";
import { FetchApi } from "./Api_calls/get_del";
import { Cons } from "./classComp/constructor"
import { ApiTest } from "./Api_calls/api_test";
import { Test } from "./Hooks/test";
// import { Component } from "./Redux/view/Component";
// import { Provider } from 'react-redux';
import { store } from "./Redux/store/store";
import ClassName from "./ClassComponent/ClassName";
import { Compo } from "./temp/components";
import User from "./temp/components"
import { ProPs } from "./temp/props";
import { Fetch } from "./temp/fetch";
import { Drop } from "./temp/dropdown";

store.subscribe(() => {
  console.log(store.getState());
});
function App() {

  // let [trigger,setTrigger]= useState(false)
  const [name,setName] = useState("yash");
  return (
    <>
      {/* APP
    <Api trigger={trigger} setTrigger={setTrigger}/>
    <FetchApi trigger={trigger} setTrigger={setTrigger}/> */}
      {/* <Cons/> */}
      {/* <ApiTest/> */}
      {/* <Test/> */}
      {/* <Provider store={store}>
   <Component/>
   </Provider> */}
      {/* <ClassName/> */}
       <Compo/>
       <User/>
       
       <ProPs  obj1 = {{name:"yash",age:"22"}}  obj2 = {{name2:"henry"}}/>
       <Fetch/>
       {/* <Drop/> */}
    </>
  );
}

export default App;
