const leftSK = document.querySelector('#left');
const centerSK = document.querySelector('#center');
const rightSK = document.querySelector('#right');

function setSoftkey(left, center, right) {
    left ? (leftSK.innerHTML = left, leftSK.classList.remove('hidden')) : leftSK.classList.add('hidden')
    center ? (centerSK.innerHTML = center.toUpperCase(), centerSK.classList.remove('hidden')) : centerSK.classList.add('hidden')
    right ? (rightSK.innerHTML = right, rightSK.classList.remove('hidden')) : rightSK.classList.add('hidden')
}

setSoftkey()