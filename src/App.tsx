import './App.css';
import FieldTile from './components/FieldTile/FieldTile';
import Field from './Field';
import FieldKey from './components/FieldKey/FieldKey';
import MessageConsole from './components/messageConsole/MessageConsole';
import { useState } from 'react';

const field = new Field();

// map through `field` to create a grid
function App() {
  const [messages, setMessages] = useState(['Welcome to the game'])

  return (
    <div className="App">
      <div className="land">
        {field.tiles.map((row, index) => {
          return (
            <div className="row" key={index}>
              {row.map((tile, index) => {
                return (
                  <FieldTile 
                    tile={tile}
                    key={index} 
                    messages={messages} 
                    setMessages={setMessages} 
                  /> 
                )
              })}
            </div>
          )
        })}
      </div>
      <div className="App__keyAndConsole">
        <FieldKey />
        <MessageConsole messages={messages} />
      </div>
    </div>
  );
}

export default App;
