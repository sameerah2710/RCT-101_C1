import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";
const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [todo, setTodo] = useState([])
  const [init, setInit] = useState("")
  const [ids,setIds] = useState(0)
  const [text, setText] =useState("")
  const change =(e) =>{
    setInit(e.Target.value);
  }
  const handle_todo =()=>{
    setTodo([
      ...todo,{id:ids,value:init,isCompleted:false}
    ])
    setIds(ids+1);
    setInit("")
  }
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={init}  placeholder='Add Task' onChange={(e)=>{
        setText(e.target.value)
      }}    
      />
      <button data-cy="add-task-button" onclick={handle_todo}>+</button>
      {
        todo.map((e) =>{
          return(
            <div kry={e.id}>{e.value}</div>
          )
        }
        )
      }
    </div>
  );
};

export default AddTask;
