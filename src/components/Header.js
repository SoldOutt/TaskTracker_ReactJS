import Button from './Button'
import { useLocation } from 'react-router-dom'
const Header = ({ onToggleForm, showForm }) => {
    const onClick = () => {
        onToggleForm()
    }
    const location = useLocation()
    return (
        <div className="header">
            <h1>Tasks Tracker</h1>
            {location.pathname === '/' && (
                <Button
                    onClick={onClick}
                    text={showForm ? 'Close' : 'Add'}
                    bg={showForm ? 'red' : 'green'}
                ></Button>
            )}
        </div>
    )
}
export default Header
