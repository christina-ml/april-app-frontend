import React from 'react'
import './MessageConsole.css';



const MessageConsole = ({messages} : {messages: string[]}) => {

  return (
    <div className="messageConsole">
        <div className="messageConsole__title">MessageConsole</div>
        <div className="messageConsole__messages">
            {messages.map(message => {
                return (
                    <div>{message}</div>
                )
            })}
        </div>
    </div>
  )
}

export default MessageConsole