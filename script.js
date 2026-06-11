let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function calculate() {
    display.value = eval(display.value);
}

function clearDisplay() {
    display.value = "";
}