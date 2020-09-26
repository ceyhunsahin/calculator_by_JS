let button = document.getElementsByClassName("button");
let screen = document.getElementById("calcul");
let calcul = document.getElementById("answer");
let numberDel = document.getElementById("numberDel");
let numberAC = document.getElementById("numberAC");


for (i=0; i<18; i++) {
    if (i!=0 && i!=1 && i!=17) {
    button[i].addEventListener("click", write);
    }
}
function write() {
    screen.textContent = screen.textContent + this.textContent;
}

calcul.addEventListener("click", calculate);

function calculate() {
    screen.textContent = eval(screen.textContent);
}
numberAC.addEventListener("click", AC);
function AC() {
    screen.textContent = "";
}

numberDel.addEventListener("click", Del);

var x = 0;
var y;

function Del() {
    x++
    y = screen.textContent;
    screen.textContent = screen.textContent.slice(0,(y.length)-1);
}


