import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Form from './components/Form'
import { useState } from 'react'
import Footer from './components/Footer'
import About from './components/About'
import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Học JavaScript',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Học ReactJS',
            day: 'Feb 6th at 2:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Học Redux',
            day: 'Feb 7th at 2:30pm',
            reminder: false,
        },
    ])
    const [showForm, setShowForm] = useState(false)
    const onDeleteTask = (id) => {
        console.log('delete ', id)
        setTasks(tasks.filter((task) => task.id !== id))
    }
    const onToggleReminder = (id) => {
        console.log('toggle', id)
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        )
    }

    const onToggleForm = () => {
        setShowForm(!showForm)
    }
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 1000) + 1
        const newTask = { ...task, id }
        console.log(newTask)
        setTasks([...tasks, newTask])
    }
    return (
        <Router>
            <div className="App">
                <Header onToggleForm={onToggleForm} showForm={showForm} />
                <Route
                    path="/"
                    exact
                    render={(props) => (
                        <>
                            {showForm && <Form addTask={addTask} />}
                            <Tasks
                                onToggleReminder={onToggleReminder}
                                onDelete={onDeleteTask}
                                tasks={tasks}
                            />
                        </>
                    )}
                ></Route>
                <Route path="/about" component={About} />
                <Footer />
            </div>
        </Router>
    )
}

export default App
