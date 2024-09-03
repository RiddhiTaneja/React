import React from 'react'
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({tasks , decreasePriority ,increasePriority,deletePriority}) => {
   
  return (
    <div>
        <ul>
            {tasks.map((task,indx)=>
               <TodoItem 
               key={indx} 
               taskName={task}
               decreasePriority={decreasePriority} 
               increasePriority={increasePriority}
               deletePriority={deletePriority}
                />)}
        </ul>
    </div>
  )
}

export default TodoList