function extractVQD(htmlString, keywords) {
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

    throw new Error("extractVQD() keywords=" + keywords + " Could not extract vqd.");
}


function getVQD(keywords) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest({ mozSystem: true });
        xhr.open("POST", "https://duckduckgo.com/", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    try {
                        var vqd = extractVQD(xhr.responseText, keywords);
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