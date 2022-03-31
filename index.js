// Open the Modal
function openModal() {
let openModel =  document.getElementById("myModal");
openModel.style.display = "block";
let pictures = document.querySelector(".modelSlide");
pictures.style.display = "block" + " !important";

}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  let pictures = document.querySelector(".modelSlide");
  pictures.style.display = "none" + " !important";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let modelSlide = document.getElementsByClassName("modelSlide");
  let thumbnail = document.getElementsByClassName("thumbnail");
  let thumbnail2 = document.getElementsByClassName("thumbnail2");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (n > modelSlide.length) {slideIndex = 1}
  if (n < 1) {slideIndex = modelSlide.length}
  for (i = 0; i < modelSlide.length; i++) {
    modelSlide[i].style.display = "none";
  }
  for (i = 0; i < thumbnail.length; i++) {
    thumbnail[i].className = thumbnail[i].className.replace("active", "");
  }
  for (i = 0; i < thumbnail2.length; i++) {
    thumbnail2[i].className = thumbnail2[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  modelSlide[slideIndex-1].style.display = "block";
  thumbnail[slideIndex-1].className += " active";
  thumbnail2[slideIndex-1].className += " active";
}
// cart javascript

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
var number = document.querySelector(".number").innerHTML;
var cartNumber = document.querySelector(".cartNumber");
const addToCart = document.querySelector(".second-child");
const shoppingCart = document.querySelector(".shopping-cart");
const avatar = document.querySelector(".avatar");
const deleteItem = document.querySelector(".delete");
const closeCart = document.querySelector("#close");
const iconMenu = document.querySelector(".icon-menu");

plus.addEventListener("click", (e)=> {
  number = parseFloat(number);
  number = number + 1;
var price = 125.00 * number;
  document.querySelector(".number").innerHTML = number;
  document.querySelector(".cartNumber").innerHTML = number;
  document.querySelector(".cartPrice").innerHTML = "$" + price + ".00";
  if (number > 0) {

    document.querySelector("#title1").setAttribute("title", number);
  } else {
  document.querySelector("#title1").removeAttribute("title");
  document.querySelector("#title1").removeAttribute("class");
  }
});
minus.addEventListener("click", (e)=> {

 if (number > 0) {
   number = parseFloat(number);
   number = number - 1;
var price = 125.00 * number;
   document.querySelector("#title1").setAttribute("title", number);
   document.querySelector(".number").innerHTML = number;
   document.querySelector(".cartNumber").innerHTML = number;
   document.querySelector(".cartPrice").innerHTML = "$" +  price + ".00";
 } else if (number === 0) {
   document.querySelector("#title1").removeAttribute("title");
   document.querySelector("#title1").removeAttribute("class");
 }
});
shoppingCart.addEventListener("click", (e)=> {
  document.getElementById("cart").style.display = "block";
});
avatar.addEventListener("click", (e)=> {
  document.getElementById("cart").style.display = "block";
});
closeCart.addEventListener("click", (e)=> {
  document.getElementById("cart").style.display = "none";
});
addToCart.addEventListener("click", (e)=> {
  document.querySelector("#title1").setAttribute("class", "title2");
  document.getElementById("cart-item").style.display = "block";
  document.querySelector(".empty").style.display = "none";
});
deleteItem.addEventListener("click", (e)=> {
  document.getElementById("cart-item").style.display = "none";
  document.querySelector(".empty").style.display = "block";
  document.querySelector("#title1").removeAttribute("class");
});
iconMenu.addEventListener("click", (e)=> {
  document.getElementById("menu").style.display = "block";
  document.getElementById("closeMenu").style.display = "block";
});

document.getElementById("closeMenu").addEventListener("click", (e)=> {
  document.getElementById("menu").style.display = "none";
  document.getElementById("closeMenu").style.display = "none";
});
