// /ac/?q=autocomplete&kl=wt-wt
function ac(query) {
    let xhr = new XMLHttpRequest({ mozSystem: true });
    let response;
    const URL = `https://duckduckgo.com/ac/?q=${encodeURIComponent(query)}&kl=wt-wt`
    xhr.open('GET', URL, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            response = JSON.parse(xhr.responseText)
            displayAC(response)
        }
    };
    // error handler
    xhr.addEventListener("error", handleEvent);
    function handleEvent(e) {
        debug(e, 'red')
    }
    xhr.send();

}

function displayAC(json){
    console.log(json)
    for(let i = 0; i < json.length; i++) {
        autocomplete.innerHTML += "<div class='autocompleteItem'>" + json[i].phrase + "</div>"
    }
}