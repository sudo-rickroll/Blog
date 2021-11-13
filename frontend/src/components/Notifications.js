import Success from './Notification'
import Failure from './Notification'

const Notifications = ({message}) => {
    const messageStyle = {
        color: 'black',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 5,
        marginBottom: 10
    }
    if ('error' in message){
        return (
            <div>
                <Failure message={message} style={messageStyle}/>
            </div>
        )
    }
    else if ('success' in message){
        return (
            <div>
                <Success message={message} style={messageStyle}/>
            </div>
        )
    }
    return null    

}

export default Notifications