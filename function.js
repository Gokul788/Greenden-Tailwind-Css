var slide = document.getElementById("silde")
var cancel = document.getElementById("del")
var popbar = document.getElementById("popbar")


slide.addEventListener("click",function(){
    
    popbar.style.right = "0"
})
cancel.addEventListener("click",function(){
   popbar.style.right = "-50%"
})