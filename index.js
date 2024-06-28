const container = document.querySelector("#container");

container.addEventListener(
    "mouseenter",
    (e) => {
        if (e.target.classList.contains("square")) {
            e.target.style.backgroundColor = getRandomColorHsl();
        }
    },
    true
)

initScreen(4);

const resetButton = document.querySelector("#reset");
resetButton.addEventListener(
    "click",
    () => {
        const input = prompt("Input the number of squares per side (1-100)");
        if (input === null) {
            return;
        }
        const screenSize = parseInt(input);
        if (Number.isInteger(screenSize) && screenSize > 0 && screenSize <= 100) {
            initScreen(screenSize);
        } else {
            alert("The input should be an integer between 1 to 100.");
        }
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

function getRandomColorHsl(s=100, l=50){
    const h = Math.floor(Math.random() * 36) * 10;
    return `hsl(${h} ${s}% ${l}%)`;
}