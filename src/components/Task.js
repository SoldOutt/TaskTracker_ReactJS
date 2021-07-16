import { FaTimes } from 'react-icons/fa'
const Task = ({ task, onDelete, onToggleReminder }) => {
    return (
        <div
            onDoubleClick={() => {
                onToggleReminder(task.id)
            }}
            className={`task ${task.reminder ? 'reminder' : ''}`}
        >
            <h3>
                {task.text}
                <FaTimes
                    onClick={() => {
                        onDelete(task.id)
                    }}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}
export default Task
