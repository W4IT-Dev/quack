document.addEventListener('keydown', e => {
    if (e.key == "Enter") {
        const activeElement = document.activeElement;
        if (activeElement.classList.toString().includes('result')) return activeElement.querySelector('a').click();

        if (activeElement == searchInput) return search(searchInput.value)
    }
    if (e.key === "0") {
        navigator.spatialNavigationEnabled === true ? navigator.spatialNavigationEnabled = true : navigator.spatialNavigationEnabled = false
    }

    if (e.key == "8") {
        // imageSearch('samra')
    }

})

