import './App.css';
/*
  W = Water
  H = House
  L = Land
  F = Forest
*/

// create land data - function for create field
const landData = createField()

// 1. create a field (land data)
function createField(){
  let field = [];
  
  // choose a random number between 0-9 for house row
  let houseRowIndex = Math.floor(Math.random() * 10);
  
  // ten times
  for (let i = 0; i < 10; i++){
    // create row
    let row = createRow(i === houseRowIndex);

    field.push(row);
  }
  // console.log(field)
  return field;
}

// 2. helper function create row (with binary possibility of house)
function createRow(hasHouse){
  let houseIndex;
  
  // if has house is true
  if (hasHouse){
    // generate random number between 0 and 9
    houseIndex = Math.floor(Math.random() * 10);
  }

  // create arr for row
  let row = [];

  // 10 times
  for (let i = 0; i < 10; i++){
    if (i === houseIndex){
      row.push('H');
      continue;
    }
  
    // create tile
    let tile = createTile();
    // push tile into row
    row.push(tile);
  }

  return row;
}

// 3. helper function - create tile
function createTile (){
  // 15% chance to create water
  // 30% chance to create forest
  // 55% chance to create land
  let num = Math.floor(Math.random() * 100);

  if (num < 15){
    return 'W';
  } else if (num < 45){
    return 'F';
  } else {
    return 'L';
  }
}

// map through `landData` to create a grid
function App() {

  // get value for color
  const getColorForTile = (tile) => {
    let color;

    switch (tile){
      case 'W':
        color = "blue";
        break;
      case 'L':
        color = "bisque";
        break;
      case 'F':
        color = "darkgreen";
        break;
      default:
        color = "brown";
    }

    return color;
  }

  return (
    <div className="App">
      <div className="land">
        {landData.map((row, index) => {
          return (
            <div className="row" key={index}>
              {row.map((tile, index) => {
                return (
                  <div 
                    key={index}
                    className="tile"
                    style={{"backgroundColor": getColorForTile(tile)}}
                  >
                    {tile}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
