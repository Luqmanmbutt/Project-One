function init() {
  
  // * Variables
  const grid = document.querySelector(".grid")
  const gridWrapper = document.querySelector(".grid-wrapper") // get the grid element
   // get the grid element
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

  let score = 0 

  const showScore = document.createElement("h1") // create the div
  gridWrapper.appendChild(showScore)
  showScore.innerText = (`SCORE ${score}`)
  showScore.className = 'the-score' // inner text of the div to be its index


  let btn = document.createElement("button");
  btn.innerHTML = "PLAY AGAIN!";
  gridWrapper.appendChild(btn);
  btn.className = 'play-again'
  // btn.onclick = reloadPage()

  // object.onclick = 
  
  // * Make a grid
  const createGrid = (snakeStartPosition) => {
    for (let I = 0; I < cellCount; I++) { 
      const cell = document.createElement("div") 
      grid.appendChild(cell) 
      cells.push(cell) 
    }

    addSnake(snakeCurrentPosition) // call the function to add the snake at its starting position
    addFood(foodStartPosition) 
  }


  const reloadPage = () => {
    window.location.reload();
  }


const addFood = (position) => {
  cells[position].classList.add(foodForSnake)
}



const checkFoodBeingEaten = () => {

  const foodCheck = cells[snakeCurrentPosition[0]].classList.contains(foodForSnake)
  
  
  if (foodCheck == true) {
    removeFood(foodStartPosition)
    score += 50 
    showScore.innerText = (`SCORE ${score}`)
    console.log('score', score)
    snakeCurrentPosition.push(snakeCurrentPosition[1])
    createsRandomFood()
    addFood(foodStartPosition)
  
  }
} 

const gameOver = () => {
  document.removeEventListener("keyup", handleKeyUp)  
  const gameOverMessage = document.createElement("h1") 
  grid.appendChild(gameOverMessage)
  gameOverMessage.innerText = 'GAME - OVER' 
  gameOverMessage.className = 'end-message'
  
}
  
 const createsRandomFood = () => {
  foodStartPosition = Math.floor(Math.random() * 400)
}

const removeFood = (position) => { 
  cells[position].classList.remove(foodForSnake)
}

  const addSnake = () => {  
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

const moveSnake = () => {
  
  clearInterval(snakeTimer)
  snakeTimer = setInterval(() => {
    
  checkFoodBeingEaten()
  const gameOverSnake = snakeCurrentPosition.filter(snake => {
    return snake === snakeCurrentPosition[0]
  })  

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
document.addEventListener("keyup", handleKeyUp) 
btn.addEventListener("click", reloadPage);


createGrid(snakeStartPosition) 
moveSnake()

}


window.addEventListener("DOMContentLoaded", init)