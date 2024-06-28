
const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);

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
}
