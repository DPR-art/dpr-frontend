// "use strict";

function carousel() {
    let carouselSlider = document.querySelector(".kom-junior");
    let list = document.querySelector(".kom-ahli");
    let item = document.querySelectorAll(".card");
    let list2;
  
    const speed = 1;
  
    const width = list.offsetWidth;
    let x = 0;
    let x2 = width;
    
    function clone() {
      // list2.style.overflowX = 'hidden'
      list2 = list.cloneNode(true);
      carouselSlider.appendChild(list2);
      list2.style.left = `${width}px`;
    }
  
    function moveFirst() {
      x -= speed;
  
      if (width >= Math.abs(x)) {
        list.style.left = `${x}px`;
      } else {
        x = width;
      }
    }
  
    function moveSecond() {
      x2 -= speed;
  
      if (list2.offsetWidth >= Math.abs(x2)) {
        list2.style.left = `${x2}px`;
      } else {
        x2 = width;
      }
    }
  
    function hover() {
      clearInterval(a);
      clearInterval(b);
    }
  
    function unhover() {
      a = setInterval(moveFirst, 25);
      b = setInterval(moveSecond, 25);
    }
  
    clone();
  
    let a = setInterval(moveFirst, 25);
    let b = setInterval(moveSecond, 25);
    carouselSlider.addEventListener("mouseenter", hover);
    carouselSlider.addEventListener("mouseleave", unhover);
  }
  
  carousel();
  