function newsSearch(query) {

    let xhr = new XMLHttpRequest({ mozSystem: true });
    let vqd;
    _get_vqd('Test')
        .then((value) => {
            vqd = value;
            console.log(value);
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
                console.log(e)
                alert('There was an error with the XHR Request.')
            }
            xhr.send();
        })
        .catch((err) => {
            console.error(err);
            alert('error!!')
        });

}


document.addEventListener('keydown', e => {
    if (e.key === "9") {
        let searchQuery = prompt('news search')
        if (searchQuery) newsSearch(searchQuery)
    }

})