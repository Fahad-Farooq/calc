let display = document.getElementById("display");

function inputNumber(v) {
    display.value += v;
}

function calculate () {
    var result = eval(display.value);
    display.value = result;
}

function allClear() {
    display.value = "";
}

function clearF() {
    display.value = display.value.substring(0, display.value.length-1);
}