const container = document.querySelector("#container");

container.addEventListener(
    "mouseenter",
    (e) => {
        if (e.target.classList.contains("square")) {
            e.target.style.backgroundColor = "pink";
        }
    },
    true
)
container.addEventListener(
    "mouseleave",
    (e) => {
        if (e.target.classList.contains("square")) {
            e.target.style.backgroundColor = "white";
        }
    },
    true
)

initScreen(4);

const resetButton = document.querySelector("#reset");
resetButton.addEventListener(
    "click",
    () => {
        const screenSize = prompt("Input the number of squares per side (<=100)");
        initScreen(screenSize);
    }
);

function initScreen(n){
    const container = document.querySelector("#container");
    container.style.width = "80vmin";
    const squareSize = `${80 / n}vmin`;
    container.textContent = "";
    for (let i = 0; i < n**2; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareSize;
        square.style.height = squareSize;
        container.appendChild(square);
    }
}