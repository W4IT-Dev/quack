window.addEventListener('keydown', e => {
    let a =document.querySelectorAll('.navItem')[([...document.querySelectorAll('.navItem')].indexOf(document.activeElement) + 1)]
    let b =document.querySelectorAll('.navItem')[([...document.querySelectorAll('.navItem')].indexOf(document.activeElement) + 1)]
    if (e.key.includes('ArrowDown') && a && getScrollAmount(a) <= 294.625) e.preventDefault();
    if (e.key.includes('ArrowUp') && !document.activeElement.classList.contains('quick-result') && document.activeElement.classList.contains('search-result')) e.preventDefault();
    if (e.key == "Enter") {
        const activeElement = document.activeElement;
        if (activeElement.classList.toString().includes('result')) return activeElement.querySelector('a').click();

        if (activeElement == searchInput) return search(searchInput.value)
    }
    if (e.key == "SoftLeft" || e.key =="F2") {
        let a = document.querySelector('#searchInput')
        a.focus();
        a.scrollIntoView({behavior:"smooth" })
    }
    if (e.key == "Backspace") {
        e.preventDefault();
        if (document.activeElement.classList.contains('selectionOption')) {

            closeSelectionMenu(searchInput);
        }
        if (!document.querySelector('iframe').classList.contains('hidden')) {
            document.querySelector('iframe').classList.add('hidden')
            document.querySelector('#search').classList.remove('hidden')
            document.querySelector('.navItem').focus();
        }
    }
    if (e.key === "0") {
        // navigator.spatialNavigationEnabled = true;
    }

    if (e.key === "9") images()
})