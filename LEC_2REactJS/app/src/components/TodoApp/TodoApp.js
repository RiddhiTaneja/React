import React, { useState } from 'react'
import TodoList from '../TodoList/TodoList';
import TodoInput from '../TodoInput/TodoInput';

const TodoApp = () => {
    let initialTasks = ["Cricket" , "Dance" , "Singing"];
    const [ tasks , setTasks] = useState(initialTasks);

    function addTask(newTask){
      setTasks([newTask,...tasks])
  }

  
function decreasePriority(taskName){
  let newTask = [...tasks];
  let index = newTask.indexOf(taskName);
  if (index < newTask.length - 1) {
      let temp = newTask[index];
      newTask[index] = newTask[index + 1];
      newTask[index + 1] = temp;
      setTasks(newTask);
  }
  console.log("You are reducing the priority of", taskName);
}

function increasePriority(taskName){
  let newTask = [...tasks];
  let index = newTask.indexOf(taskName);
  if (index > 0) {
      let temp = newTask[index];
      newTask[index] = newTask[index - 1];
      newTask[index - 1] = temp;
      setTasks(newTask);
  }
  console.log("You are increase the priority of", taskName);
}
function deletePriority(taskName){
  let newTask = tasks.filter(t => t !== taskName);
        setTasks(newTask);
        console.log("You are deleting ", taskName);
}
  return (
    
    <div>
    
    <h2>Todo App</h2>
    <TodoInput addTask={addTask} />
    {/* TodoList(tasks); */}
    <TodoList
     tasks={tasks}
     decreasePriority={decreasePriority} 
     increasePriority={increasePriority}
     deletePriority={deletePriority}
     /> 
    {/* taskarray ko js me */}
    
    </div>
  
)

}


export default TodoApp