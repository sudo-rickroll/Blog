import { Success, Failure } from './Notification'
import PropTypes from 'prop-types'

const Notifications = ({message}) => {
    Notifications.propTypes = {
        message: PropTypes.string.isRequired
    }

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