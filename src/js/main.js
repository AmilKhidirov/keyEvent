document.getElementById("input").addEventListener("keydown", function (event) {
    if (event.key === " " || event.key === "Spacebar") {
        event.preventDefault();
        var inputElement = document.getElementById("input");
        var currentValue = inputElement.value;
        var caretPosition = inputElement.selectionStart;
        var newValue = currentValue.slice(0, caretPosition - 1) + currentValue.slice(caretPosition);
        inputElement.value = newValue;
        inputElement.selectionEnd = caretPosition - 1;
    }
});