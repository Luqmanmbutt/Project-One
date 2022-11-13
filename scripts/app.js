function init() {
    //Hamza's suggestion: Take code line 4, 6, 7, 8, 17-25 (not take 'addCat' on line 24)
    // * Variables
    const grid = document.querySelector(".grid") // get the grid element
    
    const width = 10 // define the width
    const cellCount = width * width // define the number of cells on the grid
    const cells = [] // empty array to store our divs that we create
  

    const catClass = "cat" // define the class of the character
    const catStartPosition = 0 // starting position of the cat (refers to an index)
    let catCurrentPosition = 0 // use let to track where the cat currently is (refers to an index)
  
  
    // * Make a grid
    const createGrid = (catStartPosition) => {
      for (let I = 0; I < cellCount; I++) { // for loop to run for every cell, in this case we want 100 cells
        const cell = document.createElement("div") // create the div
        cell.innerText = I // inner text of the div to be its index
        grid.appendChild(cell) // make the cell a child of the grid element we grabbed above
        cells.push(cell) // add the newly created div into our empty array
      }
      addCat(catStartPosition) // call the function to add the cat at its starting position
    }
  
    // * Add Cat to grid
    function addCat(position) { // takes argument so function is reusable
    //   console.log(‘POSITION BEING PASSED IN —>’, position)
    //   console.log(‘CELL WE ARE PICKING USING THE POSITION INDEX BEING PASSED IN —>’, cells[position])
      cells[position].classList.add(catClass) // use position as index to pick the corresponding div from the array of cells and add the class of cat
    }
  
    // * Remove Cat from the grid
    function removeCat(position) {
      cells[position].classList.remove(catClass)
    }
  
    // * Move Cat
  
    function handleKeyUp(event) {
      const key = event.keyCode // store the event.keyCode in a variable to save us repeatedly typing it out
      // console.log('key', key)
      console.log("POSITION BEFORE REDEFINING —>", catCurrentPosition)
      removeCat(catCurrentPosition) // remove the cat from its current position
      
      if (key === 39 && catCurrentPosition % width !== width - 1) { // if the right arrow is pressed and the cat is not on the right edge
        catCurrentPosition++ // redefine cat position index to be previous position plus 1
      } else if (key === 37 && catCurrentPosition % width !== 0) { // if the left arrow is pressed and the cat is not on the left edge
        catCurrentPosition-- // redefine cat position index to be previous position minus 1
      } else if (key === 38 && catCurrentPosition >= width) { // if the up arrow is pressed and the cat is not on the top row
        catCurrentPosition -= width // redefine cat position index to be previous position minus width
      } else if (key === 40 && catCurrentPosition + width <= width * width - 1) { // if the down arrow is pressed and the cat is not on the bottom row
        catCurrentPosition += width // redefine cat position index to be previous position plus width
      } else {
        // console.log(‘INVALID KEY’) // any other key, log invalid key
      }
    //   console.log(‘POSITION AFTER REDEFINING —>’, catCurrentPosition)
      addCat(catCurrentPosition) // add cat to the new position that was defined in the if statement above
    }
  
    // * Event listeners
    document.addEventListener("keyup", handleKeyUp) // listening for key press
  
    createGrid(catStartPosition) // pass function the starting position of the cat
   
  }
  
  window.addEventListener("DOMContentLoaded", init)