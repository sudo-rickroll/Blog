const LoginForm = ({setUsername, setPassword, handleSubmit, style}) => {

    return (
        <div>
            <h2>login to the application</h2>
            <form onSubmit={event => handleSubmit(event)}>                
                <div style={style}>username <input type='text' onChange={event => setUsername(event.target.value)}/></div>
                <div style={style}>password <input type='password' onChange={event => setPassword(event.target.value)}/></div>
                <div style={style}><input type="submit" value="login" /></div>
            </form>
        </div>
    )
}

export default LoginForm