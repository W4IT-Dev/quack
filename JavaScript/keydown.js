window.addEventListener('keydown', e => {
    if (e.key == "Enter") {
        const activeElement = document.activeElement;
        if (activeElement.classList.toString().includes('result')) return activeElement.querySelector('a').click();

        if (activeElement == searchInput) return search(searchInput.value)
    }
    if (e.key === "0") {
        navigator.spatialNavigationEnabled = true;
    }

    if(e.key === "9") imageSearch('samra')
})