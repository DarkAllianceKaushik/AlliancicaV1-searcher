document.addEventListener("DOMContentLoaded", () => {
    const spinner = document.getElementById("spinner");
    const resultsContainer = document.getElementById("results");

    const observer = new MutationObserver(() => {
        const frame = document.querySelector(".gsc-control-cse");
        if (frame) {
            resultsContainer.classList.add("loaded");
            spinner.style.display = "none";
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const style = document.createElement("style");
    style.innerHTML = `
        .gsc-control-cse {
            animation: fadeInResults 0.6s ease-in-out;
            color: #ff4747;
        }
        @keyframes fadeInResults {
            from {opacity: 0; transform: scale(0.95);}
            to {opacity: 1; transform: scale(1);}
        }
    `;
    document.head.appendChild(style);

    // Dynamic Button Effect
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(btn => {
        btn.addEventListener('mouseover', () => btn.style.filter = 'brightness(120%)');
        btn.addEventListener('mouseleave', () => btn.style.filter = 'brightness(100%)');
    });
});