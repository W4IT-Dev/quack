function nav(classList, move) {
    if (classList[0] === "#") return document.querySelector(classList).focus();
    const currentIndex = document.activeElement;
    const items = document.querySelectorAll(classList);
    let currentElemIdx = [...items].indexOf(currentIndex)
    const next = currentElemIdx + move;
    let targetElement = items[next];
    if (targetElement) targetElement.focus(), targetElement.scrollIntoView(true);
}

document.addEventListener('keydown', e => {
    let a = document.activeElement;
    if (e.key == "ArrowDown" ) return nav(a.dataset.navdown ? a.dataset.navdown : '.navItemVertical', 1)
    if (e.key == "ArrowUp" ) return nav(a.dataset.navup ? a.dataset.navup : '.navItemVertical', -1)
    if (e.key == "ArrowRight" && a.classList.contains('navItemHorizontal')) return nav(a.dataset.navright ? a.dataset.navright : '.navItemHorizontal', 1)
    if (e.key == "ArrowLeft" && a.classList.contains('navItemHorizontal')) return nav(a.dataset.navleft ? a.dataset.navleft : '.navItemHorizontal', -1)
});
