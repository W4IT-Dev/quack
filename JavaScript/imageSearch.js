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
function _extract_vqd(htmlString, keywords) {
    var patterns = [
        { start: 'vqd="', startLen: 5, end: '"' },
        { start: "vqd=", startLen: 4, end: "&" },
        { start: "vqd='", startLen: 5, end: "'" }
    ];

    for (var i = 0; i < patterns.length; i++) {
        var pattern = patterns[i];
        var startIdx = htmlString.indexOf(pattern.start);
        if (startIdx !== -1) {
            startIdx += pattern.startLen;
            var endIdx = htmlString.indexOf(pattern.end, startIdx);
            if (endIdx !== -1) {
                return htmlString.substring(startIdx, endIdx);
            }
        }
    }

    throw new Error("_extract_vqd() keywords=" + keywords + " Could not extract vqd.");
}


function _get_vqd(keywords,) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest({ mozSystem: true });
        xhr.open("POST", "https://duckduckgo.com/", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    try {
                        var vqd = _extract_vqd(xhr.responseText, keywords);
                        resolve(vqd);
                    } catch (e) {
                        reject(e);
                    }
                } else {

                    reject(new Error("Request failed with status " + xhr.status));
                }
            }
        };

        xhr.send("q=" + encodeURIComponent(keywords));
    });
}


_get_vqd('Test')
    .then((value) => {
        debug(value, 'white')
    })
    .catch((err) => {
        debug(err, 'red')
    });