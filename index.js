const container = document.querySelector("#container");

container.addEventListener(
    "mouseenter",
    (e) => {
        if (e.target.classList.contains("square")) {
            setDarkerBackground(e.target);
        }
    },
    true
)

initScreen(16);

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
        square.setAttribute("data-lightness", 100);
        container.appendChild(square);
    }
}


function getRandomColorHsl(s=100, l=50){
    const h = Math.floor(Math.random() * 36) * 10;
    return `hsl(${h} ${s}% ${l}%)`;
}


function setRandomBackground(element){
    element.style.backgroundColor = getRandomColorHsl();
}

function setDarkerBackground(element, step=10) {
    const currentLightness = parseInt(element.getAttribute(
        "data-lightness"
    ));
    const nextLightness = Math.max(0, currentLightness - step);
    element.setAttribute("data-lightness", nextLightness);
    element.style.backgroundColor = `hsl(0 0% ${nextLightness}%)`;    
}

