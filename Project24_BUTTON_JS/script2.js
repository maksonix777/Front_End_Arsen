const redBtn = document.querySelector(".red-btn")

redBtn.addEventListener("click", function(){
  
    document.body.style.backgroundColor = "red"
})

//green
const greenBtn = document.querySelector(".green-btn")

greenBtn.addEventListener("click", function(){
    
    document.body.style.backgroundColor = "green"
})



//blue
const blueBtn = document.querySelector(".blue-btn")

blueBtn.addEventListener("click", function(){
    
    document.body.style.backgroundColor = "blue"
})

//yellow
const yellowBtn = document.querySelector(".yellow-btn")

yellowBtn.addEventListener("click", function(){
    
    document.body.style.backgroundColor = "yellow"
})



const imgBtn = document.querySelector(".img-btn");
const body = document.querySelector("body");

imgBtn.addEventListener("click", function() {
    body.style.backgroundImage = "url(./img/1673848413-926523-3D70.jpg)";
});