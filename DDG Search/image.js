function imageSearch(query) {
    let xhr = new XMLHttpRequest({ mozSystem: true });
    let vqd;
    
    getVQD(query)
        .then((value) => {
            vqd = value;
            debug(value, 'white')
            const URL = `https://duckduckgo.com/i.js?bpia=1&a=h_&o=json&q=${encodeURIComponent(query)}&vqd=${vqd}&f=,,,,,&p=-1`
            xhr.open('GET', URL, true);
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // console.log(xhr.responseText)
                    // alert(xhr.responseText)
                    let response = JSON.parse(result)
                    for (let i = 0; i < response.length; i++) {
                        const element = response[i];
                        displayImageSearchResult(element.title, element.url, element.thumbnail, element.height, element.width)
                    }
                }
            };
            // error handler
            xhr.addEventListener("error", handleEvent);
            function handleEvent(e) {
                debug(e, 'red')
            }
            xhr.send();
        })
        .catch((err) => {
            debug(err, 'red')
        });

}

function displayImageSearchResult(title, url, source, height, width) {
    let div = document.createElement('div');
    div.classList.add('search-result', 'navItem');
    div.tabIndex = 0;
    div.onfocus = () => setSoftkey('<img src="assets/loupe_black.png" style="width:20px; padding-top: 2px;"></img>', translate('open'), '<img src="assets/share.png" style="width: 20px; padding-top: 2px;"')
    div.onblur = () => setSoftkey()

    let img = document.createElement('img');
    img.src = source

    let linkTitle = document.createElement('a')
    linkTitle.innerText = title
    linkTitle.href = url

    div.appendChild(img)
    div.appendChild(linkTitle)
    console.log(div)
    searchResults.appendChild(div)
}
