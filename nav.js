function nav(move, classList) {
    const currentIndex = document.activeElement;
    const items = document.querySelectorAll('.' + classList);
    let currentElemIdx = [...items].indexOf(currentIndex)
    const next = currentElemIdx + move;
    let targetElement = items[next];
    if (targetElement) targetElement.focus();
}

document.addEventListener('keydown', e => {
    if (e.key == "ArrowDown") document.activeElement.classList.contains('selectionNavItem') ?  nav(1, 'selectionNavItem') : nav(1, 'navItem');
    if (e.key == "ArrowUp") document.activeElement.classList.contains('selectionNavItem') ?  nav(-1, 'selectionNavItem') : nav(-1, 'navItem');
})