
const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener(
        "mouseenter",
        (e) => {
            e.target.style.backgroundColor = "pink";
        }
    )
    square.addEventListener(
        "mouseleave",
        (e) => {
            e.target.style.backgroundColor = "white";
        }
    )
    container.appendChild(square);
}
