function extractText() {
    let liElements = document.getElementsByTagName(`li`);
  let spred = Array.from(liElements)
    let text = spred.map(e=>e.textContent)
    document.getElementById(`result`).value = text.join(`\n`)
}