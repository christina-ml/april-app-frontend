/*
  W = Water
  H = House
  L = Land
  F = Forest
*/

export default class Field {
    // 1. create a field (land data)
    tiles: string[][];

    constructor() {
        this.tiles = [];

        // choose a random number between 0-9 for house row
        let houseRowIndex = Math.floor(Math.random() * 10);
        
        // ten times
        for (let i = 0; i < 10; i++){
            // create row
            let row = this.createRow(i === houseRowIndex);

            this.tiles.push(row);
        }
    }
    
    // 2. helper function create row (with binary possibility of house)
    createRow(hasHouse: boolean){
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
          let tile = this.createTile();
          // push tile into row
          row.push(tile);
        }
      
        return row;
      }

    // 3. helper function - create tile
    createTile (){
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
}

  



// create land data - function for create field
// const landData = createField()

// // 1. create a field (land data)
// function createField(){
//   let field = [];
  
//   // choose a random number between 0-9 for house row
//   let houseRowIndex = Math.floor(Math.random() * 10);
  
//   // ten times
//   for (let i = 0; i < 10; i++){
//     // create row
//     let row = createRow(i === houseRowIndex);

//     field.push(row);
//   }
//   // console.log(field)
//   return field;
// }

// 2. helper function create row (with binary possibility of house)
// function createRow(hasHouse: boolean){
//   let houseIndex;
  
//   // if has house is true
//   if (hasHouse){
//     // generate random number between 0 and 9
//     houseIndex = Math.floor(Math.random() * 10);
//   }

//   // create arr for row
//   let row = [];

//   // 10 times
//   for (let i = 0; i < 10; i++){
//     if (i === houseIndex){
//       row.push('H');
//       continue;
//     }
  
//     // create tile
//     let tile = createTile();
//     // push tile into row
//     row.push(tile);
//   }

//   return row;
// }

// // 3. helper function - create tile
// function createTile (){
//   // 15% chance to create water
//   // 30% chance to create forest
//   // 55% chance to create land
//   let num = Math.floor(Math.random() * 100);

//   if (num < 15){
//     return 'W';
//   } else if (num < 45){
//     return 'F';
//   } else {
//     return 'L';
//   }
// }