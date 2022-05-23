import React,{useState} from "react";
import styles from "./counter.module.css";

const Counter = (props) => {
  // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  const [count,setCount] = useState(props.count)
  const handleChange =(value)=>{
    if(count!==0){
      setCount(count+value)
    }
  }
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onclick={()=>handleChange(+1)}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onclick={(handleChange(-1))}>-</button>
    </div>
  );
};

export default Counter;
