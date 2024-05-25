function newsSearch(query) {
    let xhr = new XMLHttpRequest({ mozSystem: true });
    const URL = `https://duckduckgo.com/news.js?l=us-en&o=json&noamp=1&m=30&q=${query}&vqd=4-35187128179332829135154318621901253206&p=-2&df=&u=bing`
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
}

// newsSearch('Facebook')