import React from 'react'
import './MessageConsole.css';



const MessageConsole = ({messages} : {messages: string[]}) => {
  
  return (
    <div className="messageConsole">
        <div className="messageConsole__title">MessageConsole</div>
        <div className="messageConsole__messages">
            {messages.map((message, index) => {
                return (
                    <div key={index + "farmMessage"}>
                      {message}
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default MessageConsole