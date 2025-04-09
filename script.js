function makeGrid(size) {
    // for loop up to grid size that makes divs
    // and makes them part of class "square"
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

    // append the divs to container div
}

makeGrid(16);