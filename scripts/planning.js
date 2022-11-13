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
}
  
window.addEventListener("DOMContentLoaded", init)