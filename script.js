document.addEventListener("DOMContentLoaded", () => {
    const box1 = document.getElementById("box1");
    const message = document.getElementById("message");
    const openMessage = document.getElementById("open-message");
    const warningMessage = document.getElementById("warning-message");
    const boxesContainer = document.getElementById("boxes-container");
    const boxes = document.querySelectorAll(".boxes-container .box");
    const ringMessage = document.getElementById("ring-message");
    const tryAgainMessage = document.getElementById("try-again-message");

    box1.addEventListener("click", () => {
        explodeBox(box1);
        openMessage.style.display = "none";
        message.style.display = "block";
        warningMessage.style.display = "block";
        boxesContainer.style.display = "flex";
        showEffects();
    });

    boxes.forEach((box, index) => {
        if (box.id === "box4") {
            box.addEventListener("click", () => {
                explodeBox(box);
                ringMessage.style.display = "flex";
                warningMessage.style.display = "none";
            });
        } else {
            box.addEventListener("click", () => {
                explodeBox(box);
                tryAgainMessage.style.display = "block";
                setTimeout(() => {
                    tryAgainMessage.style.display = "none";
                }, 2000);
            });
        }
    });

    function explodeBox(box) {
        box.style.transition = "transform 0.3s, opacity 0.3s";
        box.style.transform = "scale(2)";
        box.style.opacity = "0";
        setTimeout(() => {
            box.style.display = "none";
        }, 300);
    }

    function showEffects() {
        createFlowers();
    }

    function createFlowers() {
        for (let i = 0; i < 50; i++) {
            const flower = document.createElement("div");
            flower.classList.add("flower-effect");
            document.body.appendChild(flower);
            flower.style.left = `${Math.random() * 100}vw`;
            flower.style.animationDuration = `${Math.random() * 3 + 2}s`;
        }
    }
});
