function searchImages(query) {
    getVQD(query)
        .then(value => {
            console.log(value)
            let xhr = new XMLHttpRequest({ mozSystem: true });
            xhr.open('GET', `https://duckduckgo.com/i.js?l=wt-wt&bpia=1&a=h_&o=json&q=${encodeURIComponent(query)}&vqd=${value}&f=,,,,,&p=-1`, true);
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    displaySearchImages(JSON.parse(xhr.responseText).results)
                    console.log(JSON.parse(xhr.responseText).results)
                }
            };
            // error handler
            xhr.addEventListener("error", handleEvent);
            function handleEvent(e) {
                console.error(e)
            }
            xhr.send();

        })
        .catch(err => {
            console.error(err)
        })
}

function displaySearchImages(results) {
    for (let i = 0; i < results.length; i++) {
        const element = results[i];
        let div = document.createElement('div');
        div.classList.add('search-result', 'navItemVertical');
        div.style.textAlign = "center"
        div.tabIndex = 0;

        let img = document.createElement('img');
        img.src = element.thumbnail
        img.dataset.height = element.height
        img.dataset.width = element.width


        let linkTitle = document.createElement('a')
        linkTitle.innerText = element.title
        linkTitle.href = element.url

        div.appendChild(img)
        div.appendChild(document.createElement('br'))
        div.appendChild(linkTitle)
        console.log(div)
        searchResults.appendChild(div)
    }
}