function nav(move) {
    const currentIndex = document.activeElement;
    const items = document.querySelectorAll('.navItem');
    let currentElemIdx = [...items].indexOf(currentIndex)
    const next = currentElemIdx + move;
    let targetElement = items[next];
    if (targetElement) targetElement.focus();
}

document.addEventListener('keydown', e => {
    if (e.key == "ArrowDown") nav(1);
    if (e.key == "ArrowUp") nav(-1);
})