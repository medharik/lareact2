import React, { useState } from 'react'
// import  ReactDOM  from 'react-dom'
import { createRoot } from 'react-dom/client';

const Hello = () => {
    const [counter, setcounter] = useState(0)
  return (
    <>
    <button onClick={()=>setcounter(p=>p+1)}> +</button>
    <br />
    <button onClick={()=>setcounter(counter-1)}> -</button>
        <h1>HELLO lorem {counter}</h1>
    </>

  )
}
export default Hello
if(document.getElementById('hello')){

    const container = document.getElementById('hello');
    const root = createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(<Hello />);

}
