const MAX_SIZE = 100;

function makeGrid(size) {
    const container = document.querySelector(".container");
    for(let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for(let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
    }
    addColoring();
}

function addColoring() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";});
    })
}

// When we change the size of the grid we need to remove the old one
function removeGrid() {
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        row.remove();
    })
}

function changeSize() {
    const newSize = prompt("Enter new size: ");
    if(newSize > 100) 
        alert("Size cannot be greater than 100");
    else {
        removeGrid();
        makeGrid(newSize);
    }
}

makeGrid(16); // Grid starts as 16x16

const button = document.querySelector("button");
button.addEventListener("click", changeSize);