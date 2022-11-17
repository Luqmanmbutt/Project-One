function init() {
  
  // * Variables
  const grid = document.querySelector(".grid") // get the grid element
  
  const width = 20 // define the width ---- YOU STORE THINGS INSIDE A VARIABLE.
  const cellCount = width * width // define the number of cells on the grid
  const cells = [] // empty array to store our divs that we create

  const foodForSnake = "food" 
  const foodStartPosition = Math.floor(Math.random() * 400)
  // let foodCurrentPostion = 0

  const snakeClass = "snake" // define the class of the character
  const snakeStartPosition = [44, 43, 42]// starting position of the cat (refers to an index)
  let snakeCurrentPosition = [224, 223, 222]  // use let to track where the cat currently is (refers to an 
  let snakeDirection 
  let snakeTimer 
  const speed = 1500


  // * Make a grid
  const createGrid = (snakeStartPosition) => {
    for (let I = 0; I < cellCount; I++) { // i starts at 0, i less than 100, adds 1 
      const cell = document.createElement("div") // create the div
      cell.innerText = I // inner text of the div to be its index
      grid.appendChild(cell) // make the cell a child of the grid element we grabbed above
      cells.push(cell) // add the newly created div into our empty array
    }

    addSnake(snakeStartPosition) // call the function to add the snake at its starting position
    addFood(foodStartPosition) 
  }
    
// Add food 

const addFood = (position) => {
  cells[position].classList.add(foodForSnake)
}

// foodCurrentPostion = Math.floor(Math.random() * 100)


  const addSnake = () => { 
  /* snakeStartPosition is an array with 3 numbers [42, 43, 44] 
     the forEach breaks the array, and accesses 3 the numbers and stores them in 'x'. so x = 44, x = 43 and x = 42
     then whatever you write inside the foreach BLOCK, it does that command to each of those numbers. 
  */ 
     snakeCurrentPosition.forEach(x => {
      cells[x].classList.add(snakeClass) 
    })
  
  }

// * Remove snake from current position 
const removeSnake = () => {
  snakeCurrentPosition.forEach(x => {
    cells[x].classList.remove(snakeClass) 
  })

}


// remove the last element in the snake array 
// * Move snake

const snakeMove = () => {
  
  clearInterval(snakeTimer)
  snakeTimer = setInterval(() => {
    
    
    
    if (snakeDirection === 'right' && snakeCurrentPosition[0] % width !== width - 1) {
      removeSnake()
      console.log('snakeCurrentPosition before', snakeCurrentPosition)
      snakeCurrentPosition.unshift(snakeCurrentPosition[0] + 1) // add a new item (number) to the beginning of the array 
      snakeCurrentPosition.pop()
      console.log('snakeCurrentPosition after', snakeCurrentPosition)
      addSnake()

    } else if (snakeDirection === 'left' && snakeCurrentPosition[0] % width !== 0) {
      removeSnake()
      // console.log('snakeCurrentPosition before', snakeCurrentPosition)
      snakeCurrentPosition.push(snakeCurrentPosition[2] - 1)
      snakeCurrentPosition.shift()
      // console.log('snakeCurrentPosition after', snakeCurrentPosition)
      addSnake() 
    }
     else if (snakeDirection === 'up' && snakeCurrentPosition[0] >= width) {
      removeSnake()
      // console.log('snakeCurrentPosition before', snakeCurrentPosition)
      snakeCurrentPosition.unshift(snakeCurrentPosition[0] - width)
      snakeCurrentPosition.pop()
      // console.log('snakeCurrentPosition after', snakeCurrentPosition)
      addSnake()



    }
  
  
  
  
  
  }, speed) 

   
}

// 44 % 10 = 4 without the remainder 
// The unshift() method adds new elements to the beginning of an array
// The pop() method removes (pops) the last element of an array.
// 44 % 10 = 4 without the remainder 
// with the function snakeMove we are trying to make the snake move constantly right how we do that. 
// the function snakeMove clear snake use the id returned from setInterval which is snakeTimer. 
// setINterval function saying if snakedirection equlas to right and snakecurrentposition is ([0](44)) 
// - 1 to remove last snake 
// snakecurrentposition.unshift means adding a new element in the begingin of the array which than adds +1
// to the array [0] while removing the last number from the array an adding the snake to the next move 
//
//



const handleKeyUp = (event) => {
  const key = event.keyCode // press button 
  //  
  removeSnake(snakeCurrentPosition) // remove the cat from its current position
  
 
  if (key === 39) {
    snakeDirection = 'right' 
    snakeMove()
  } else if (key === 37) { 
    snakeDirection = 'left'
    snakeMove() 
  } else if (key === 38) { 
    snakeDirection = 'up'
    snakeMove()
  } else if (key === 40 && snakeCurrentPosition + width <= width * width - 1) { 
    snakeCurrentPosition += width 
  } else {
    // console.log(‘INVALID KEY’) // any other key, log invalid key
  }
//   console.log(‘POSITION AFTER REDEFINING —>’, catCurrentPosition)
  addSnake(snakeCurrentPosition) // add cat to the new position that was defined in the if statement above
  

}



// * Event listeners
document.addEventListener("keyup", handleKeyUp) // 

createGrid(snakeStartPosition) // pass function the starting position of the cat

// handleKeyUp()


// MOVE SNAKE CONSTANTLY ----------- work on this after creating a new variable -- mae sure to change the variable name on the function below.

// const handleKeyUp = (event) => {
//   const key = event.keyCode // press button 
//   //  
//   removeSnake(snakeCurrentPosition) // remove the cat from its current position
  
//   // when firing handlekeyup both remove and add snake are being fired within the same function.
// // removes the snake only after its fired again - line by line code- 
//   if (key === 39 && snakeCurrentPosition % width !== width - 1) { // if the right arrow is pressed and the cat is not on the right edge
//     snakeCurrentPosition++ // add 1 to the current position.
//   } else if (key === 37) { // if the left arrow is pressed and the cat is not on the left edge
//     snakeCurrentPosition-- // removes 1 from the current position
//   } else if (key === 38 && snakeCurrentPosition >= width) { // if the up arrow is pressed and the cat is not on the top row
//     snakeCurrentPosition -= width // minus 10 from current position
//   } else if (key === 40 && snakeCurrentPosition + width <= width * width - 1) { // if the down arrow is pressed and the cat is not on the bottom row
//     snakeCurrentPosition += width // adds 10 to current position
//   } else {
//     // console.log(‘INVALID KEY’) // any other key, log invalid key
//   }
// //   console.log(‘POSITION AFTER REDEFINING —>’, catCurrentPosition)
//   addSnake(snakeCurrentPosition) // add cat to the new position that was defined in the if statement above
  

// }





}


window.addEventListener("DOMContentLoaded", init)