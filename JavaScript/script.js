
function errorHandler(message, source, lineno, colno, error) {
  const errorMessage = `
      Message: ${message}
      Source: ${source}
      Line number: ${lineno}
      Error object: ${error}
    `;
console.log(errorMessage)
  // alert(errorMessage)

}
window.onerror = errorHandler;

document.querySelector('.navItem').focus();

function showSelectionMenu(href, lastFocusedElement) {
  const elements = document.querySelectorAll('.selectionOption')

  elements[0].onkeydown = (e) => { if (e.key == "Enter") window.open(href), closeSelectionMenu(lastFocusedElement); }
  elements[1].onkeydown = (e) => {
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

// function ac() {
//   let xhr = new XMLHttpRequest({ mozSystem: true });
//   xhr.open('GET', 'https://duckduckgo.com/ac/?q=super', true);
//   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       alert(xhr.responseText)
//     }
//   };
//   // error handler
//   xhr.addEventListener("error", handleEvent);
//   function handleEvent(e) {
//     console.log(e)
//     alert('There was an error with the XHR Request.')
//   }
//   xhr.send();
// } ac();



function getScrollAmount(element) {
  // Get the bounding rectangle of the element relative to the viewport
  const rect = element.getBoundingClientRect();

  // Calculate the scroll amount needed to bring the element into view
  const scrollAmount = rect.top;

  return scrollAmount;
}

// Example usage:
const fourthElement = document.querySelector('#search'); // Replace 'fourthElement' with the id of your fourth div
const scrollAmount = getScrollAmount(fourthElement);
console.log("Scroll amount needed:", scrollAmount);
