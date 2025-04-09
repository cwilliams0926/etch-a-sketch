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

function changeSize() {
    const newSize = prompt("Enter new size: ");
}

makeGrid(16);

const button = document.querySelector("button");
button.addEventListener("click", changeSize);