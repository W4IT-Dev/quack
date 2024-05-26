function newsSearch(query) {
    let xhr = new XMLHttpRequest({ mozSystem: true });
    let vqd;
    _get_vqd(query)
        .then((value) => {
            vqd = value;
            console.log(value);
            debug(value, 'white')
            const URL = `https://duckduckgo.com/news.js?l=us-en&o=json&noamp=1&m=30&q=${query}&vqd=${vqd}&p=-2&df=&u=bing`
            xhr.open('GET', URL, true);
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    console.log(xhr.responseText)
                    alert(xhr.responseText)
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


document.addEventListener('keydown', e => {
    if (e.key === "9") {
        let searchQuery = prompt('news search')
        if (searchQuery) newsSearch(searchQuery)
    }

})