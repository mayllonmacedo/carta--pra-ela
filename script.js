const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const instruction = document.querySelector(".instruction");

envelope.addEventListener("click", () => {

    envelope.classList.toggle("open");

    if (envelope.classList.contains("open")) {

        instruction.textContent = "Uma carta feita especialmente para você ❤️";

        setTimeout(() => {
            letter.style.display = "block";

            letter.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 800);

    } else {

        letter.style.display = "none";
        instruction.textContent = "Clique no envelope 💌";

    }

});


/* Corações flutuando */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["❤️", "💕", "💗", "💖", "💘"];

    heart.innerHTML = hearts[
        Math.floor(Math.random() * hearts.length)
    ];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 15 + 12) + "px";

    heart.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 700);