function search(query) {
    let xhr = new XMLHttpRequest({ mozSystem: true });
    xhr.open('GET', 'https://duckduckgo.com/html?q=' + encodeURIComponent(query), true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            parseSearchResults(xhr.responseText);
        }
    };
    // error handler
    xhr.addEventListener("error", handleEvent);
    function handleEvent(e) {
        debug(e,'red')
    }
    xhr.send();
}



function parseSearchResults(html) {
    // PARSE
    let parser = new DOMParser();
    let parsedDocument = parser.parseFromString(html, 'text/html');

    // delete duckduckgo icon
    document.querySelector('#duckduckgoLogo') ? document.querySelector('#duckduckgoLogo').remove() : null

    // Display results
    // qsr = quickSearchResult
    searchResults.innerHTML = ""
    const qsr = parsedDocument.querySelector('.zci')
    if (qsr) {
        displayQuickResult(qsr.querySelector('.zci__heading').textContent, qsr.querySelector('.zci__result').textContent, qsr.querySelector('a').href, qsr.querySelector('.zci__image') ? qsr.querySelector('.zci__image').src : false)
    }
    // search results
    let parsedSearchResults = parsedDocument.querySelectorAll('.result')
    parsedSearchResults.forEach(function (result) {
        if (!result.classList.contains('result--ad')) displaySearchResult(result.querySelector('.result__a').textContent, result.querySelector('.result__snippet').textContent, result.querySelector('.result__url'), result.querySelector('.result__icon__img').src)
    });
    searchResults.querySelector('.navItem').focus();
    var links = document.querySelectorAll("a[href]");
    links.forEach(function (link) {
        if(links.id === "backToTop") return
        link.addEventListener("click", function (event) {
            // Add your loading event here
            event.preventDefault();
            console.log(document.activeElement);
            showSelectionMenu(event.target.href, document.activeElement);

            return

            console.log(event.target.href)
            console.log("Loading event triggered");
            // Optionally, prevent the default navigation behavior
        });
    });
}

function displayQuickResult(title, snippet, url, image) {
    searchResults.innerHTML += `
    <div class="quick-result navItem" tabindex="0" onblur="setSoftkey()" onfocus="setSoftkey('', \`${translate('open')}\`)">
        ${image ? `<img src="${image}" alt="" class="quick-result__image">` : ''}
        <h1 class="quick-result__title"><a href="${url}">${title}</a></h1>
        <p class="quick-result__snippet">${snippet}</p>
    </div>
    `
}

function displaySearchResult(title, snippet, urlElement, icon) {
    let div = document.createElement('div');
    div.classList.add('search-result', 'navItem')
    div.onfocus = () => setSoftkey('<img src="assets/loupe_black.png" style="width:20px; padding-top: 2px;">', `${translate('open')}`)
    div.onblur = () => setSoftkey()
    div.tabIndex = 0;
    div.dataset.icon = icon
    div.innerHTML = `
    <h2 class="search-result__title"><a href="${urlElement.href}">${title}</a></h2>
    <p class="search-result__url" data-icon="${icon}">${urlElement.textContent}</p>
    <p class="search-result__snippet">${snippet}</p>`
    searchResults.appendChild(div);
    var iconUrl = div.getAttribute('data-icon');
    div.style.setProperty('--icon-url', 'url("' + iconUrl + '")');
}