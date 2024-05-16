window.addEventListener('keyup', e => {
    if (e.key == "Enter") {
        const activeElement = document.activeElement;
        if (activeElement.classList.toString().includes('result')) return activeElement.querySelector('a').click();

        if (activeElement == searchInput) return search(searchInput.value)
    }
    if (e.key == "SoftLeft") window.history.back()
    if (e.key == "Backspace") {
        e.preventDefault();
        if (document.activeElement.classList.contains('selectionOption')) {

            closeSelectionMenu(searchInput);
        } 
        if(!document.querySelector('iframe').classList.contains('hidden')) {
            document.querySelector('iframe').classList.add('hidden')
            document.querySelector('#search').classList.remove('hidden')
            document.querySelector('.navItem').focus();
        }
    }
    if (e.key === "0") {
        navigator.spatialNavigationEnabled = true;
    }

    if (e.key === "9") imageSearch('samra')
})