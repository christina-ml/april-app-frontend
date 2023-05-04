import './App.css';
import FieldTile from './FieldTile/FieldTile';
import Field from './Field';
import FieldKey from './FieldKey/FieldKey';

const field = new Field();

// map through `field` to create a grid
function App() {

  return (
    <div className="App">
      <div className="land">
        {field.tiles.map((row, index) => {
          return (
            <div className="row" key={index}>
              {row.map((tile, index) => {
                return (
                  <FieldTile tile={tile} key={index} /> 
                )
              })}
            </div>
          )
        })}
      </div>
      <div className="key">
        <FieldKey />
      </div>
    </div>
  );
}

export default App;
