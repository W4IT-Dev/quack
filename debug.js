// DEBUG 
const keySequence = ['*', '#', '*', '#', '3', '3', '2', '8', '4', '#', '*', '#', '*'];
let currentIndex = 0;

function handleKeyDown(event) {
    const keyPressed = event.key;
    if (keyPressed === "Enter" && !document.querySelector('#searchResults')) document.activeElement.click();
    if (keyPressed === keySequence[currentIndex]) {
        currentIndex++;

        if (currentIndex === keySequence.length) {
            currentIndex = 0;
            console.log('Key combination entered successfully!');
            alert('true')
            document.body.innerHTML = ''
            document.body.innerHTML =
                `<div class="search-results" id="searchResults"></div>
            <button class="navItem" tabindex="0" onclick="search('test')">Search (query: test)</button>
            <button class="navItem" tabindex="0" onclick="imageSearch('test')">Search Images (query: test)</button>
            <button class="navItem" tabindex="0" onclick="debugViewNavigator()">View navigator properties</button>
            <button class="navItem" tabindex="0" onclick="navigator.spatialNavigationEnabled = true">Enable Cursor</button>
            <button class="navItem" tabindex="0" onclick="navigator.spatialNavigationEnabled = false">Disable Cursor</button>
            <button class="navItem" tabindex="0" onclick="home();">Go home</button>`
        }
    } else {
        currentIndex = 0;
    }
}

document.addEventListener('keydown', handleKeyDown);

function debugViewNavigator() {
    let navigatorInfo = navigator
    document.body.innerHTML += '<div class="separator debug">' + navigatorInfo + '</div><br>'

    for (let key in navigatorInfo) {
        document.body.innerHTML += `
			<div class="list-item navItem debug" tabindex="0" style="border-bottom: 1px solid grey;";>
  <p class="list-item__text"><b>${key}</b></p>
  <p class="list-item__subtext">${navigatorInfo[key]}</p>
</div>
			`
    }
}

function home() {
    document.body.innerHTML = `<img id="duckduckgoLogo" src="icon.png" width="137px" alt="DuckDuckGo">
    <div id="searchBarWrapper">
        <input type="text" id="searchInput" class="navItem" tabindex="0" placeholder="Search">
        <button onclick="search(searchInput.value)" id="searchButton" class="navItem" tabindex="0">
            <img src="loupe_black.png" width="20px">
        </button>
    </div>`
}

function debug(text, color) {
    document.querySelector('#debug_console').innerHTML += `<div class="navItem" tabindex="0" style="background-color: ${color}; border-bottom: 1px solid black;">${text}</div>`
    console.log(`%c${text}`, `background-color: ${color};`)
    document.querySelector('#debug_console').classList.remove('hidden')
    setTimeout(() => {
        document.querySelector('#debug_console').classList.add('hidden')

    }, 900)
}

document.addEventListener('keydown', e => {
    if (e.key == "#") document.querySelector('#debug_console').classList.toggle('hidden')
    if (e.key == "*") {
        let testType = prompt('Input test type ( vqd | all | image | video | news | shopping)')
        if (testType && testType !== "exit") debugTest(testType)
    }
})

function debugTest(testType) {
    const testQuery = prompt('Input test query')
    switch (testType) {
        case 'vqd':
            getVQD(testQuery)
                .then((value) => {
                    debug(value, 'green')
                    alert(value)
                })
                .catch((error) => {
                    debug(error, 'red')
                    alert(error)
                })
            break;

        case 'news':
            newsSearch(testQuery)
            break;
        case 'all':
            search(testQuery)
            break;

        case 'image':
            imageSearch(testQuery)
            break;
        case 'video':
            videoSearch(testQuery)
            break;
        case 'shopping':
            shoppingSearch(testQuery)
            break;

        default:
            alert('specify test type')
            break;
    }
}