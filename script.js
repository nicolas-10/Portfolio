
function navSlide(){
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks= document.querySelectorAll('.nav-links li');

  burger.addEventListener('click' , function navSlide() {

      //barrette de la Nav
    nav.classList.toggle('nav-active');

    //animation des liens
    navLinks.forEach( (link , i) => {
      if(link.style.animation){
          link.style.animation = '';
      }
      else {
          link.style.animation = `navLinksFade 0.5s ease forwards ${ i / 5 + 1}s`;
      }

    });

    //animation de la barrette
    burger.classList.toggle('toggle')
});

}
navSlide();
//autre maniere d'ecrire une fonction: declaration d'une variable qui est le nom de la fonction = () =>
//exple: const nico = () => {}

/*window.onscroll = function() {
  var navLink = document.querySelectorAll(".nav-links li a");
  if (document.documentElement.scrollTop>800) {
      document.getElementById("navbar").style.background = "white"; 
      document.querySelector(".logo").style.color = "black";
      for (var i = 0; i < navLink.length; i++) {
      navLink[i].style.color = "white";      
    }
   var burg = document.querySelectorAll(".burger div");
   for (var i = 0; i < burg.length; i++) {
    burg[i].style.background= "black";      
  }
  }
  else {
    document.getElementById("navbar").style.background = "black"; 
    document.querySelector(".logo").style.color = "white";
    for (var i = 0; i < navLink.length; i++) {
      navLink[i].style.color = "white";      
    }
    for (var i = 0; i < burg.length; i++) {
      burg[i].style.background= "white";      
    }
  }
}*/






