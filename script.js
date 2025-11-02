var navbar1=document.getElementById("navbar1")
var slide=document.querySelector(".slide")

navbar1.addEventListener("click",function(){
        var navbar01=document.getElementById("navbar01")

        navbar01.style.display="none"
})

var hearts = document.querySelectorAll('.heart');

hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    if (heart.src.includes('heart.png')) {
      heart.src = './image/heart (1).png';
    } else {
      heart.src = './image/heart.png';
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var search = document.getElementById("search1");
  var productlist = document.querySelectorAll(".photo1");

  search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.trim().toUpperCase();

    productlist.forEach(function (item) {
      var title = item.querySelector("h3").textContent.toUpperCase();
      item.style.display = title.indexOf(enteredValue) > -1 ? "block" : "none";
    });
  });
});


var option1=document.querySelector(".option1")
var menu=document.getElementById("menu");
var close=document.getElementById("close");


menu.addEventListener("click",function(){
    option1.style.left=0
  
})
close.addEventListener("click",function(){
  option1.style.left="-50%"
})

