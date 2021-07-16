// import { useState } from 'react'
import Task from './Task'
const Tasks = ({ tasks, onDelete, onToggleReminder }) => {
    return (
        <div className="tasks">
            {tasks.length > 0
                ? tasks.map((task) => (
                      <Task
                          onToggleReminder={onToggleReminder}
                          key={task.id}
                          onDelete={onDelete}
                          task={task}
                      />
                  ))
                : 'No task at here'}
        </div>
    )
}
export default Tasks
