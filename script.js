// Observer to detect Google Search embed load
const observer = new MutationObserver(() => {
    const frame = document.querySelector('.gsc-control-cse');
    if (frame) {
        document.getElementById('results').classList.add('loaded');
    }
});

observer.observe(document.body, { childList: true, subtree: true });