const items = document.querySelectorAll(".item");
const rsButton = document.querySelector(".reset-btn");

items.forEach((item) => {
    const counter = item.querySelector("p");
    const img = item.querySelector(".item img");

    img.addEventListener("click", () => {
        let currentValue = parseInt(counter.textContent);
        counter.textContent = currentValue + 1;
        if (currentValue > 3) {
            items.style.borderColor = "red";
        }
    })
})

rsButton.addEventListener("click", () => {
    items.forEach((item) => {
        const counter = item.querySelector("p");
        counter.textContent = 0;
    })
})