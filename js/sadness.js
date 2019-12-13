var myDate = new Date();
var m = myDate.getMonth() + 1;
var d = myDate.getDate();

if(m===12&&d===13) {
    sosad();
}
if(m===5&&d===12) {
    sosad();
}
if(m===9&&d===18) {
    sosad();
}
if(m===9&&d===30) {
    sosad();
}

function sosad() {
    var html = document.getElementsByTagName("html")[0];
    html.style.filter  = "grayscale(100%)";
}