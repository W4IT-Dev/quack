function errorHandler(message, source, lineno, colno, error) {
  const errorMessage = `
      Message: ${message}
      Source: ${source}
      Line number: ${lineno}
      Error object: ${error}
    `;

  alert(errorMessage)

}
window.onerror = errorHandler;

document.querySelector('.navItem').focus();

function showSelectionMenu(href, lastFocusedElement) {
  const elements = document.querySelectorAll('.selectionOption')
  elements[0].onkeydown = (e) => {
    if (e.key == "Enter") {
      const iframe = document.querySelector('iframe')
      iframe.src = href;
      iframe.classList.remove('hidden')
      iframe.focus();
      document.querySelector('#search').classList.add('hidden')
      navigator.spatialNavigationEnabled = true;

      closeSelectionMenu(lastFocusedElement);
    }
  }
  elements[1].onkeydown = (e) => { if (e.key == "Enter") window.open(href), closeSelectionMenu(lastFocusedElement); }
  elements[2].onkeydown = (e) => {
    if (e.key == "Enter") {
      let openURL = new MozActivity({
        name: "view",
        data: {
          type: "url",
          url: href
        }
      });
      closeSelectionMenu(lastFocusedElement)
    }
  }
  document.querySelector('#selectionsWrapper').classList.remove('hidden')
  document.querySelector('#selectionOptions1').focus()
}

function closeSelectionMenu(elementToFocus) {
  document.querySelector('#selectionsWrapper').classList.add('hidden')
  setTimeout(() => { elementToFocus.focus() }, 100);
}