import React, { useState } from 'react'
import classes from './Counter.module.css';


const Counter = () => {
    let initialvalCounter = 0;
    const [counter , setCounter] = useState(initialvalCounter);
    function increaseCounter(){
      setCounter(counter+1);
      console.log("Increase Counter Value", counter);
    }

    function decreaseCounter(){
      if(counter>0)
      setCounter(counter-1);
      console.log("decreasing Counter Value", counter);
    }
  return (

    <div className={classes['counter']}>
        
<button onClick={decreaseCounter}>-</button>
        <span>Counter value : {counter}</span>
    <button onClick={increaseCounter}>+</button>
    
    </div>
  )
}

export default Counter