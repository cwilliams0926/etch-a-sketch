function makeGrid(size) {
    // for loop up to grid size that makes divs
    // and makes them part of class "square"
    const container = document.querySelector(".container");
    for(let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        container.appendChild(square);
    }

    // append the divs to container div
}

makeGrid(16);