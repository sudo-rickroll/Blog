const LoginForm = ({setUsername, setPassword, handleSubmit}) => {
    return (
        <div>
            <form onSubmit={event => handleSubmit(event)}>
                <h2>login to the application</h2>
                <p>username <input type='text' onChange={event => setUsername(event.target.value)}/></p>
                <p>password <input type='password' onChange={event => setPassword(event.target.value)}/></p>
                <input type="submit" value="login" />
            </form>
        </div>
    )
}

export default LoginForm