const Success = ({message, style}) => {
    const messageStyle = {
        ...style,
        color: 'green'
    }
    return (
        <div style={messageStyle}>
            {message.success}
        </div>
    )
}

const Failure = ({message, style}) => {
    const messageStyle = {
        ...style,
        color: 'red'
    }
    return (
        <div style={messageStyle}>
            {message.error}
        </div>
    )
}

export default {
    Success,
    Failure
}