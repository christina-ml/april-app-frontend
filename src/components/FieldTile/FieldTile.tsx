import React, { useState } from 'react';
import './FieldTile.css';
import getTimeStamp from '../../helperFunctions/getTimeStamp';

type FieldTileTypes = {
    tile: string;
    setMessages?: ((message : string[]) => void) | undefined;
    messages: string[];
}

const FieldTile = ({tile, setMessages, messages}: FieldTileTypes) => {

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
                setMessages && setMessages([`${getTimeStamp()} You cannot plant corn on the water.`, ...messages]);
                break;
            case 'L':
                setPlanted(true);
                setMessages && setMessages([`${getTimeStamp()} ${message}`, ...messages]);
                break;
            case 'F':
                setMessages && setMessages([`${getTimeStamp()} You cannot plant corn in the forest.`, ...messages]);
                break;
            default:
                setMessages && setMessages([`${getTimeStamp()} You cannot plant corn on your house.`, ...messages]);
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