# etch-a-sketch
A simple website that creates a grid of squares that change color when you hover over them. Made for Odin Project's Foundations course.

# How it's made
**Tech Used**: HTML, CSS, and JavaScript

The HTML is fairly simple, as most of the DOM is created by the JavaScript in this project. It just has some divs to contain the nodes that will be created by the script. The CSS was made as the JavaScript was being written, as a lot of styling in this project is on the DOM nodes created by the script. The CSS simply has some styling for a button at the top of the screen, and it has the styling to create the grid using flexbox. The project description called for flexbox instead of grid in order to test the flexbox skills of the user.

The JavaScript is the main part of the code. The function makeGrid() takes an input size and uses for loops to create an n x n size grid of divs. This function calls another function called addColoring(), which uses event listeners to make the background-color of each square black when the mouse hovers over it. When the website is opened, makeGrid(16) is called as a default grid size. The button at the top of the website is given a click event listener that calls a function changeSize(). This function first prompts the user for a new size and then checks if it is greater than the max size (a constant variable = 100). If it is not greater than 100, the function calls a function removeGrid() that removes the previous grid by removing the grid's div nodes. Then, it calls makeGrid() using the new size.

# Lessons learned
This project was very helpful for my overall understanding of DOM manipulation in JavaScript. I learned how to add new nodes and give them classes and styles. It also tested my overall coding and problem solving skills.