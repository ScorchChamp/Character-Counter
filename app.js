
window.addEventListener("load", function () {
    const inputArea = document.getElementById("input");
    const outputWordsArea = document.getElementById("output-words");
    const outputCharsArea = document.getElementById("output-chars");
    inputArea.addEventListener("input", function () {
        outputWordsArea.textContent = inputArea.value.split(" ").length;
        outputCharsArea.textContent = inputArea.value.length;
    })
})