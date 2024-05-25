function nav(move, classList) {
    const currentIndex = document.activeElement;
    const items = document.querySelectorAll('.' + classList);
    let currentElemIdx = [...items].indexOf(currentIndex)
    const next = currentElemIdx + move;
    let targetElement = items[next];
    if (targetElement) targetElement.focus(), targetElement.scrollIntoView(true);
}

document.addEventListener('keydown', e => {
    let a = document.querySelectorAll('.navItem')[([...document.querySelectorAll('.navItem')].indexOf(document.activeElement) + 1)]
    if (e.key == "ArrowDown" && a && getScrollAmount(a) <= 294.625) {

        // console.log(document.activeElement.clientHeight > 294)
        document.activeElement.classList.contains('selectionNavItem') ? nav(1, 'selectionNavItem') : nav(1, 'navItem');
    }
    if (e.key == "ArrowUp") {
        let b = document.querySelectorAll('.navItem')[([...document.querySelectorAll('.navItem')].indexOf(document.activeElement) - 1)]
        if (b) {
document.activeElement.classList.contains('selectionNavItem') ? nav(-1, 'selectionNavItem') : nav(-1, 'navItem');
        }
    }
});
