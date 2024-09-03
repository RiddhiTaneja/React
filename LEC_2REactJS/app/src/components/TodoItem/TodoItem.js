import React from 'react'
import classes from './TodoItem.module.css';

const TodoItem = ({taskName ,decreasePriority ,increasePriority,deletePriority}) => {    
  return (
    <li className={classes['taskItem']}>
      <div className={classes['taskName']}>{taskName}</div>

      <div className={classes['btnGroup']}>
      <button onClick={()=>increasePriority[taskName]}>⬆</button>
      <button onClick={()=>decreasePriority[taskName]}>⬇</button>
      <button onClick={()=>deletePriority[taskName]}>✖</button>
      </div>
      </li>
  )
}

export default TodoItem