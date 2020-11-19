import './alert.scss';

function Alert({text, color}) {
    return (
        <div className={`text ${color}`}>
            {text}
        </div>
    );
}

export default Alert;