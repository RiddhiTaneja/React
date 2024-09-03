import React from 'react'

const tasks = [
    'Cricket' , 'Dance' ,'Sing' , 'Volleyball'
]

const TaskList = () => {
  return (
  <div>
    <h2>TaskList</h2>

    {tasks.map((t, indx) =>{
return <div key = {indx}>{t}</div>
})}

  </div>

)

}

export default TaskList