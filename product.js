var containerpro = document.getElementById("container-pro")
var search = document.getElementById("Search")
var divlist = containerpro.querySelectorAll("#go")


search.addEventListener("keyup",function(){
    var entered = search.value.toUpperCase();
      
    for( let i=0; i<divlist.length ; i++){
        
        var h1list = divlist[i].querySelector("h1").textContent;

        if(h1list.toUpperCase().indexOf(entered)<0){
            divlist[i].style.display = "none"
        }
        else{
            divlist[i].style.display = "block"
        }
    }
    })