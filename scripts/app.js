function init() {
  //Hamza's suggestion: Take code line 4, 6, 7, 8, 17-25 (not take 'addCat' on line 24)
  // * Variables
  const grid = document.querySelector(".grid") // get the grid element
  
  const width = 10 // define the width ---- YOU STORE THINGS INSIDE A VARIABLE.
  const cellCount = width * width // define the number of cells on the grid
  const cells = [] // empty array to store our divs that we create

  const foodForSnake = "food" 
  const foodStartPosition = Math.floor(Math.random() * 100)
  // let foodCurrentPostion = 0

  const snakeClass = "snake" // define the class of the character
  const snakeStartPosition = [44, 43, 42]// starting position of the cat (refers to an index)
  let snakeCurrentPosition = 44  // use let to track where the cat currently is (refers to an index)
// 

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


  const addSnake = (position) => { 
  /* snakeStartPosition is an array with 3 numbers [42, 43, 44] 
     the forEach breaks the array, and accesses 3 the numbers and stores them in 'x'. so x = 44, x = 43 and x = 42
     then whatever you write inside the foreach BLOCK, it does that command to each of those numbers. 
  */ 
     snakeStartPosition.forEach(x => {
      cells[x].classList.add(snakeClass) 
      console.log('test', snakeStartPosition)
    })
  
  }

// * Remove snake from current position 
const removeSnake = (position) => {
    cells[position].classList.remove(snakeClass)
    // snakeStartPosition.pop()
}


// remove the last element in the snake array 
// * Move snake

const snakeMove = () => {
  
  // console.log('test')
  
}

setInterval(snakeMove, 1000)

snakeMove()

// const moveSnake = document.getElementById("demo");
// setInterval(function() {element.innerHTML += "Hello"}, 1000);

// console.log(moveSnake)

// const setInterval = () => {
//    {element.innerHTML += 'hello'}, 1000;
// }


const handleKeyUp = (event) => {
  const key = event.keyCode // press button 
  //  
  removeSnake(snakeCurrentPosition) // remove the cat from its current position
  
  // when firing handlekeyup both remove and add snake are being fired within the same function.
// removes the snake only after its fired again - line by line code- 
  if (key === 39 && snakeCurrentPosition % width !== width - 1) { // if the right arrow is pressed and the cat is not on the right edge
    snakeCurrentPosition++ // add 1 to the current position.
  } else if (key === 37 && snakeCurrentPosition % width !== 0) { // if the left arrow is pressed and the cat is not on the left edge
    snakeCurrentPosition-- // removes 1 from the current position
  } else if (key === 38 && snakeCurrentPosition >= width) { // if the up arrow is pressed and the cat is not on the top row
    snakeCurrentPosition -= width // minus 10 from current position
  } else if (key === 40 && snakeCurrentPosition + width <= width * width - 1) { // if the down arrow is pressed and the cat is not on the bottom row
    snakeCurrentPosition += width // adds 10 to current position
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









}



window.addEventListener("DOMContentLoaded", init)