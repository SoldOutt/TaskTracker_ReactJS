import { useState } from 'react'
const Form = ({ addTask }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        if (text === '') {
            alert('Ghi cái nhiệm vụ vào ')
            return
        }
        addTask({ text, day, reminder })
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form onSubmit={onSubmit} className="form-add">
            <div className="form-group">
                <label htmlFor="">Task</label>
                <input
                    type="text"
                    className="form-control"
                    name="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    id=""
                    placeholder="Add Task"
                    aria-describedby="fileHelpId"
                />
            </div>
            <div className="form-group">
                <label htmlFor="">Day & Time</label>
                <input
                    type="text"
                    name="day"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    id=""
                    className="form-control"
                    placeholder="Add Day & Time"
                    aria-describedby="helpId"
                />
            </div>
            <div className="form-check">
                <label className="form-check-label">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="reminder"
                        onChange={(e) => setReminder(e.currentTarget.checked)}
                        id=""
                        checked={reminder ? true : false}
                    />
                    Do you want reminder
                </label>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    )
}
export default Form
