
var colors = generateRandomColors(6);

var heading = document.querySelector("h1");
var select = document.getElementsByClassName("square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var btnClick = document.querySelector("#newGame");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected")
    easyBtn.classList.add("selected")
    colors = generateRandomColors(3)
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<select.length; i++){
        if(colors[i]){
            select[i].style.backgroundColor = colors[i];
        }else{
            select[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected")
    hardBtn.classList.add("selected")
    colors = generateRandomColors(6)
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<select.length; i++){
        if(colors[i]){
            select[i].style.backgroundColor = colors[i];
            select[i].style.display = "block";
        }
    }
})

btnClick.addEventListener("click", function(){
    location.reload();
})
colorDisplay.textContent = pickedColor.toUpperCase();
for(var i=0; i<select.length; i++){
    // add initial colors to squares
    select[i].style.backgroundColor = colors[i];

    // add event listeners to squares
    select[i].addEventListener("click", function(){
        // grab the color to be tested
        var answer = this.style.backgroundColor;
        // compare it to picked color
        if(answer === pickedColor){  
        messageDisplay.textContent = "Correct";
        changeColors(answer);
        heading.style.backgroundColor = answer;
        btnClick.textContent = "Play Again?"
        }else{
        messageDisplay.textContent = "Try Again";
        this.style.backgroundColor = "#232323";
    }})
}

function changeColors( color ){
    for(var i = 0; i<select.length; i++){
     select[i].style.backgroundColor = color;   
    }
}

function pickColor(){
    randomNumber = Math.floor(Math.random() * colors.length );
    return colors[randomNumber];
}

function generateRandomColors(num){
    var arr = [];
    for(var i=0; i<num; i++){
        arr.push(randomColors());
    }
    return arr;
}

function randomColors(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
