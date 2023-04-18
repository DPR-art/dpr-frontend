const btn = document.querySelector('.menu');
const logo = document.querySelector('.logoLink');
const  nav = document.querySelector('nav');
const settings = document.getElementById('setting');
btn.addEventListener('click', function menu() {
    btn.classList.toggle('active');
    if (btn.classList.contains('active')) {
        nav.classList.add('mobile');
        nav.classList.remove('slide');
    }
    else {
        nav.classList.remove('mobile');
        nav.classList.add('slide');
    }
});
function checkScreenSize() {
      if(window.innerWidth > 700) {
        nav.classList.remove('slide');
        nav.classList.replace('mobile','window');
      }
      else{
        // menuToggle.click()
        nav.classList.remove('window');
      }
    }
    window.onload = checkScreenSize;
    window.onresize = checkScreenSize;

    // responsive navbar
const menuToggle = document.querySelector('.menu-toggle input');
const aktiv= document.querySelector('.slide');
menuToggle.addEventListener('click', function toggle() {
  nav.classList.toggle('slide');
  });

const counters = document.querySelectorAll('.value');
const speed = 200;
const bingung = document.getElementsByClassName("bingung")[0];

// document.querySelectorAll('.sidebar-link')[1].onclick = myFunction;

// function myFunction() {
//   console.log("1")
// }
let indicator = false;
  window.onscroll = function(){
    if(bingung.getBoundingClientRect().top < 90){
    if(!indicator){
      indicator = true;
      // counterIt()
      // console.log("here");
      counters.forEach( counter => {
        const animate = () => {
          const value = +counter.getAttribute('akhi');
            const data = +counter.innerText;
            
            const time = value / speed;
            if(data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 10);
              }else{
                counter.innerText = value;
              }
            
            }
            
          animate();
        });
    }
  }
}
