const display = document.getElementById("display");
function AppendToDisplay(input) {
    display.value += input;
}
function ClearDisplay() {
    display.value = "";
}
function Clear() {
    display.value = "";
}
function Calculate() {
    try {
        display.value = eval(display.value);
    } 
    catch (error) {
        display.value = "ERROR";
    }
}