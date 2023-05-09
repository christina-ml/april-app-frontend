import React, { useState } from 'react';
import './FieldTile.css';

type FieldTileTypes = {
    tile: string
}

const FieldTile = ({tile}: FieldTileTypes) => {

    const [planted, setPlanted] = useState(false);

    // get value for color for tile
    const getColorForTile = (tile: string) => {

        let color;

        switch (tile){
        case 'W':
            color = "blue";
            break;
        case 'L':
            if (planted){
                color = 'yellow';
            } else {
                color = "bisque";
            }
            break;
        case 'F':
            color = "darkgreen";
            break;
        default:
            color = "brown";
        }

        return color;
    }

    const plantCorn = (event: React.MouseEvent<HTMLDivElement>) => {
        const element = event.target as HTMLElement;
        const tileType = element.id;

        let message = 'You have planted corn here.';
        switch (tileType){
            case 'W':
                console.log('you cannot plant corn on the water.');
                break;
            case 'L':
                setPlanted(true);
                console.log(message);
                break;
            case 'F':
                console.log('you cannot plant corn in the forest.');
                break;
            default:
                console.log('you cannot plant corn on your house.');
            }
    }

    if (planted){
        console.log('this tile is planted');
    }

  return (
    <div 
        className="tile" 
        style={{"backgroundColor": getColorForTile(tile)}}
        onClick={plantCorn}
        id={tile}
    >
        {tile}
    </div>
  )
}

export default FieldTile