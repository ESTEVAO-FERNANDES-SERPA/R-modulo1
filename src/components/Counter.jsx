import React from "react";
import { useState } from "react";
const Counter = () => {
    const  [counter, SetCounter] = useState(0)

    const handleCounter=(operator)=>{
        if(operator === '-' && counter !== 0){
            SetCounter(counter-1)
            
          }else if(operator === '+'){
            SetCounter(counter+1)
            
          }
    }

    return(
        <>  
            <h1>Contador</h1>
            <h2>{counter}</h2>
            <button onClick={()=>{handleCounter('+')}}>+</button>
            <button onClick={()=>{handleCounter('-')}}>-</button>
        </>
    )
}

export default Counter