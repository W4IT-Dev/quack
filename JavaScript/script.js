function errorHandler(message, source, lineno, colno, error) {
    const errorMessage = `
      Message: ${message}
      Source: ${source}
      Line number: ${lineno}
      Error object: ${error}
    `;

    alert(errorMessage)

}
window.onerror = errorHandler

document.querySelector('.navItem').focus();