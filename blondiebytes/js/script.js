function revealmessage(){
    document.getElementById("hiddenmessage").style.display = 'block';
}
function countdown() {
    var currentVal = document.getElementById("countdownbutton").innerHTML
    var newVal = 0;
    if (currentVal > 0) {
        newVal = currentVal - 1;
    }
    document.getElementById("countdownbutton").innerHTML = newVal;
}