const Button = ({ text, bg, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="btn"
            style={{ backgroundColor: bg }}
        >
            {text}
        </button>
    )
}
Button.defaultProps = {
    color: 'steelblue',
}
export default Button
