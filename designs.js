
// Acquire width (x) and height (y) on press of submit
const form = document.getElementById("sizePicker");
form.addEventListener("submit", submit);
var x = "";
var y = "";


// Setting a color
var color = "black";
var input = document.getElementById("colorPicker");
input.addEventListener("input", function() {
    color = input.value;
})


// Clears the table and overwrites with new when Submit is pressed
function submit(event) {
    event.preventDefault()
    x = document.getElementById("inputWidth").value;
    y = document.getElementById("inputHeight").value;
    makeGrid(x, y)
}


// Frame builder + game's body. Max size set to 35x35 to prevent cpu stress in case of very high argument value
function makeGrid(x, y){
    const form = document.getElementById("sizePicker");
    form.addEventListener("submit", submit);
    const container = document.getElementById("pixelCanvas");
    container.innerHTML = "";
    if (x > 35 || y > 35) {
        alert("Maximum size is 35x35");
    }
    else {
        for (let row = 0 ; row < x ; row++) {
            let newRow = document.createElement("tr");
            container.appendChild(newRow);
            for (let column = 0 ; column < y ; column++) {
                let newColumn = document.createElement("td");
                newRow.appendChild(newColumn);
        }}}

    container.addEventListener("click", function(box) {
        if (box.target.nodeName === "TD") {
        box.target.style.cssText = `background-color: ${color}`;
    }})};