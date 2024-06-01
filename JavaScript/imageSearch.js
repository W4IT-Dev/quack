function imageSearch(query) {
    let xhr = new XMLHttpRequest({ mozSystem: true });
    xhr.open('GET', 'https://duckduckgo.com/i.js?l=us-en&bpia=1&a=h_&o=json&q=Razer%20is%20a%20clown&vqd=4-198408097072088235563924617583928523207&f=,,,,,&p=-1', true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.responseText)
        }
    };
    // error handler
    xhr.addEventListener("error", handleEvent);
    function handleEvent(e) {
        debug(e, 'red')
    }
    xhr.send();
}
// imageSearch('this is my kingdom come')



getVQD('Test')
    .then((value) => {
        debug(value, 'white')
    })
    .catch((err) => {
        debug(err, 'red')
    });