function nav(move, classList) {
    const currentIndex = document.activeElement;
    const items = document.querySelectorAll('.' + classList);
    let currentElemIdx = [...items].indexOf(currentIndex)
    const next = currentElemIdx + move;
    let targetElement = items[next];
    if (move === -1) console.log(getScrollAmount(targetElement));
    if (targetElement) targetElement.focus(), targetElement.scrollIntoView();
}

document.addEventListener('keydown', e => {
    if (e.key == "ArrowDown" && getScrollAmount(document.querySelectorAll('.navItem')[([...document.querySelectorAll('.navItem')].indexOf(document.activeElement) + 1)]) <= 294.625) {
        // console.log(document.activeElement.clientHeight > 294)
        document.activeElement.classList.contains('selectionNavItem') ? nav(1, 'selectionNavItem') : nav(1, 'navItem');
    }
    if (e.key == "ArrowUp") {
        let scrollAmountNeeded = getScrollAmount(document.querySelectorAll('.navItem')[([...document.querySelectorAll('.navItem')].indexOf(document.activeElement) - 1)])
        if (scrollAmountNeeded >= -294.625) document.activeElement.classList.contains('selectionNavItem') ? nav(-1, 'selectionNavItem') : nav(-1, 'navItem');
    }
});
