const items = document.querySelectorAll(".item");
const rsButton = document.querySelector(".reset-btn");
const startButton = document.querySelector(".start-btn");
const results = document.querySelectorAll(".results .result img");
let playerChoices = [];
const maxBets = 3;
const images = ["bau", "ca", "cua", "ga", "huou", "tom"];
let totalBets = 0;

items.forEach((item) => {
    item.addEventListener("click", () => {
        const counter = item.querySelector("p");
        const currentCount = parseInt(counter.textContent);
        if (totalBets >= maxBets) return;

        if (totalBets < maxBets) {
            counter.textContent = currentCount + 1;
            totalBets++;
            playerChoices.push(item.getAttribute('data-name'));
            console.log(playerChoices);
        }

        if (totalBets >= maxBets) {
            items.forEach((item) => {
                item.style.border = "2px solid red";
            })
        }
    })
})

startButton.addEventListener("click", () => {
    let count = 0;

    const interval = setInterval(() => {
        results.forEach((result) => {
            const randomImg = Math.floor(Math.random() * images.length);
            result.setAttribute("src", `./Assets/${images[randomImg]}.png`);
        });

        count++;
        if (count >= 20) {
            clearInterval(interval);

            const randomResults = [];
            for (let i = 0; i < 3; i++) {
                const randomIndex = Math.floor(Math.random() * images.length);
                randomResults.push(images[randomIndex]);
            };

            results.forEach((result, index) => {
                result.setAttribute("src", `./Assets/${randomResults[index]}.png`);
            });

            console.log(playerChoices.values());
            // console.log(randomResults.every(choice => playerChoices.includes(choice)));
        }
    }, 150)
    
})

rsButton.addEventListener("click", () => {
    totalBets = 0;
    playerChoices = [];
    items.forEach((item) => {
        item.querySelector("p").textContent = 0;
        item.style.border = "1px solid black";
    })
})