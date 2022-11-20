function init() {
  
  // * Variables
  const grid = document.querySelector(".grid") // get the grid element
  const width = 20 // define the width ---- YOU STORE THINGS INSIDE A VARIABLE.
  const cellCount = width * width // define the number of cells on the grid
  const cells = [] // empty array to store our divs that we create

  const foodForSnake = "food" 
  let foodStartPosition = Math.floor(Math.random() * 400)
  // let foodCurrentPostion = 

  
  const snakeClass = "snake" // define the class of the character
  const snakeStartPosition = [44, 43, 42]// starting position of the cat (refers to an index)
  let snakeCurrentPosition = [224, 223, 222]  // use let to track where the cat currently is (refers to an 
  let snakeDirection = 'right'
  let snakeTimer 

  const speed = 100


  // * Make a grid
  const createGrid = (snakeStartPosition) => {
    for (let I = 0; I < cellCount; I++) { // i starts at 0, i less than 100, adds 1 
      const cell = document.createElement("div") // create the div
      grid.appendChild(cell) // make the cell a child of the grid element we grabbed above
      cells.push(cell) // add the newly created div into our empty array
    }

    addSnake(snakeCurrentPosition) // call the function to add the snake at its starting position
    addFood(foodStartPosition) 
  }


    
// Add food 

const addFood = (position) => {
  cells[position].classList.add(foodForSnake)
}


//snake head meeting the food
//snakecurrentposition meaning the head being [0]
const checkFoodBeingEaten = () => {
  // console.log('checkFoodBeingEatan', foodStartPosition)q
  const foodCheck = cells[snakeCurrentPosition[0]].classList.contains(foodForSnake)
  // console.log('before', foodCheck)
  // if a variable returns booleans (true or false) you can write just the variable name, in the example below 
  // this will check if foodCheck is returning true
  // if you want to check foodCheck is false, you write it as: if (!foodCheck)
  
  if (foodCheck == true) {
    removeFood(foodStartPosition)
    snakeCurrentPosition.push(snakeCurrentPosition[1])
    createsRandomFood()
    addFood(foodStartPosition)
    
    // next should be that you need to add a new number inside array Snakecurrentposition
    // IMPORTANT NEXT STEP
    
    // if food check returns true then we need to remove foodforsnake
    // then we need to add random food to div with the following - addFood(foodStartPosition)
  }
} 


const gameOver = () => {
  document.removeEventListener("keyup", handleKeyUp)  
  const gameOverMessage = document.createElement("h1") // create the div
  grid.appendChild(gameOverMessage)
  gameOverMessage.innerText = 'GAMEOVER' // inner text of the div to be its index
  gameOverMessage.className = 'end-message'
  

  console.log('message pop up after snake dies', gameOverMessage)

}


// adding a number inside the last postion of the array (snakecurrentposition)
//foodcurrentposition push into snakecurrentposition
// const growSnake = () => {
//   snakeCurrentPosition.push(foodStartPosition)
// }  


 const createsRandomFood = () => {
  foodStartPosition = Math.floor(Math.random() * 400)
}


const removeFood = (position) => { 
  cells[position].classList.remove(foodForSnake)
}

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

const moveSnake = () => {
  
  clearInterval(snakeTimer)
  snakeTimer = setInterval(() => {
    
  checkFoodBeingEaten()
  const gameOverSnake = snakeCurrentPosition.filter(snake => {
    return snake === snakeCurrentPosition[0]
  })
    console.log('gameOverSnake', gameOverSnake.length)
  
  
  if (snakeDirection === 'right' && snakeCurrentPosition[0] % width !== width - 1 && gameOverSnake.length < 2) {
    removeSnake()
    snakeCurrentPosition.unshift(snakeCurrentPosition[0] + 1) 
    snakeCurrentPosition.pop()
    addSnake()

  } else if (snakeDirection === 'left' && snakeCurrentPosition[0] % width !== 0 && gameOverSnake.length < 2) {
    removeSnake()
    snakeCurrentPosition.unshift(snakeCurrentPosition[0] - 1)
    snakeCurrentPosition.pop()
    addSnake() 
  }
    else if (snakeDirection === 'up' && snakeCurrentPosition[0] >= width && gameOverSnake.length < 2) {
    removeSnake()
    snakeCurrentPosition.unshift(snakeCurrentPosition[0] - width)
    snakeCurrentPosition.pop()
    addSnake()
  }
    else if (snakeDirection === 'down' && snakeCurrentPosition[0] + width <= width * width - 1 && gameOverSnake.length < 2) {
      removeSnake()
      snakeCurrentPosition.unshift(snakeCurrentPosition[0] + width)
      snakeCurrentPosition.pop()
      addSnake()
    } else {
      clearInterval(snakeTimer)
      gameOver()
    }
  }, speed) 
}

const handleKeyUp = (event) => {
  const key = event.keyCode 
  removeSnake(snakeCurrentPosition) 
  if (key === 39) {
    snakeDirection = 'right' 
    moveSnake()
  } else if (key === 37) { 
    snakeDirection = 'left'
    moveSnake() 
  } else if (key === 38) { 
    snakeDirection = 'up'
    moveSnake()
  } else if (key === 40 ) { 
    snakeDirection = 'down'
    moveSnake() 
  } else {
  } 
  addSnake(snakeCurrentPosition) 
}

// * Event listeners
document.addEventListener("keyup", handleKeyUp) // 

createGrid(snakeStartPosition) // pass function the starting position of the cat
moveSnake()
// handleKeyUp()




}


window.addEventListener("DOMContentLoaded", init)