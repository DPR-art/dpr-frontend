// const button = document.querySelectorAll('#btn')
// const slider = document.querySelector('');
const pengenalan = document.querySelectorAll('.part1');


// button[0].addEventListener('click', function () {
//    pengenalan.style.transform = 'translateX(-0px)';
// });

// button[1].addEventListener('click', function () {
//     pengenalan.style.transform = 'translateX(-99%)';
// });

// button[2].addEventListener('click', function () {
//     pengenalan.style.transform = 'translateX(-196%)';
// });

let autoSlide = 1

setInterval(function() {
    if(autoSlide == 1 ){
        // button[1].click()
        pengenalan[1].style.transform = 'translateX(-270px)'
        pengenalan[0].style.transform = 'translateX(-270px)'
        pengenalan[2].style.transform = 'translateX(-270px)'
        autoSlide++
        
    }else if(autoSlide == 2){
        pengenalan[2].style.transform = 'translateX(-550px)';
        pengenalan[1].style.transform = 'translateX(-550px)';
        pengenalan[0].style.transform = 'translateX(-550px)';
        // button[2].click()
        autoSlide++
    }else {
        pengenalan[0].style.transform = 'translateX(20px)';
        pengenalan[2].style.transform = 'translateX(20px)';
        pengenalan[1].style.transform = 'translateX(20px)';
        // button[0].click()
        autoSlide = 1
    }
},2800)


