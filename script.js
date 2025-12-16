let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")
let sombra = document.getElementById("sombra")

function abreFechaMenu(){
    //se o menu esta fechado
    if(window.getComputedStyle(menu).right == "-210px"){
        //abrir o menu
        menu.style.right = "0"

        //mostrar icone X
        iconeX.style.display = "inline"

        //esconde icone barras
        iconeBarras.style.display = "none"

        sombra.style.right = "0"

    }else{
        //fechar o menu
        menu.style.right = "-210px"

        //fechar icone X
        iconeX.style.display = "none"

        //mostrar o icone barras
        iconeBarras.style.display = "inline"

        sombra.style.right = "-101vw"
    }
}

onresize = () =>{
    if(window.getComputedStyle(menu).right == "-210px"){
        //mostrar icone X
        iconeX.style.display = "none"
    }else{
        //esconde icone barras
        iconeBarras.style.display = "inline"
    }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
