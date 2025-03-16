 var menuicon = document.getElementById("image");
var list = document.getElementById("list")
var menustatus
menustatus = "closed"
menuicon.onclick = function(){
   if( menustatus == "closed"){
       menuicon.src = "cross.png"
       list.style.display = "block"
      menustatus = "open"
      } else{
      menuicon.src ="menu-bar.png"
    list.style.display = "none"
          menustatus = "closed"
      }
}
window.onscroll= function(){
     menuicon.src ="menu-bar.png"
    list.style.display = "none"
          menustatus = "closed"
  if(window.pageYOffset > 0){
      leftarrow.style.display="none"
     rightarrow.style.display="none"
  }else{
       leftarrow.style.display="block"
     rightarrow.style.display="block"
  }
    console.log(window.pageYOffset)
}

var leftarrow = document.getElementById("left")
var rightarrow = document.getElementById("right")
var slider = document.getElementById("maincontent")
var images = ["background.jpg" , "post2.jpg" , "post3.jpg"]
var i
i = 0
slider.style.backgroundImage = "url("+images[i]+")";
leftarrow.onclick=function(){
if(i>0){
    slider.style.backgroundImage = "url("+images[i-1]+")";
    i=i-1
   }
}
    

rightarrow.onclick=function(){
  if(i<images.length-1){
          slider.style.backgroundImage = "url("+images[i+1]+")";
    i=i+1;
     }
   
}