function startSearch() {
    let query = document.getElementById('searchInput').value.trim();
    let status = document.getElementById('statusMessage');

    if (!query) {
        status.innerText = "Please enter a search term!";
        return;
    }

    status.innerText = "Your search has started...";

    let searchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}+site:pastebin.com+OR+site:pasted.co+OR+site:controlc.com+OR+site:hastebin.com+OR+site:paste.ee+OR+site:throwbin.io+OR+site:ghostbin.com`;

    document.getElementById('searchFrame').src = searchURL;
}

// Simplified floating dots effect for less lag
const canvas = document.getElementById('bgEffect');
const ctx = canvas.getContext('2d');
let w, h, dots;

function initCanvas() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    dots = Array.from({length: 50}, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
    }));
}
function animate() {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, w, h);
    for (let dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = 'gold';
        ctx.fill();

        dot.x += dot.dx;
        dot.y += dot.dy;

        if (dot.x < 0 || dot.x > w) dot.dx *= -1;
        if (dot.y < 0 || dot.y > h) dot.dy *= -1;
    }
    requestAnimationFrame(animate);
}
window.addEventListener('resize', initCanvas);
initCanvas();
animate();