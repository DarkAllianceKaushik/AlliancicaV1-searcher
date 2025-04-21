document.addEventListener("DOMContentLoaded", () => {
    const spinner = document.getElementById('spinner');
    const searchContainer = document.querySelector('.gcse-search');

    function hideSpinnerWhenLoaded() {
        let observer = new MutationObserver(() => {
            if (searchContainer.innerText.trim().length > 0) {
                spinner.style.display = 'none';
                observer.disconnect();
            }
        });
        observer.observe(searchContainer, { childList: true, subtree: true });
    }

    hideSpinnerWhenLoaded();
});