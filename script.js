const display = document.getElementById("display");

function clearDisplay() {
    display.value = "";
}   

function eraseDisplay() {
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(input) {
    display.value += input;
    display.scrollLeft = display.scrollWidth;
}

function calculate() {
    try {
        display.value = display.value.replaceAll("×", "*");
        display.value = display.value.replaceAll("÷", "/");

        display.value = eval(display.value);
    }
    catch(error) {
        display.value ="Error";
    }
}