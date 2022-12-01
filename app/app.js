
 // countDownTimer
const days  = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")


const currentDataTime = new Date().getFullYear();
const newDataTime = new Date(`January 1 ${currentDataTime + 1} 2023 00:00:00`)


//Update counterDownTime
function  updateCounterDownTime() {
    const currentTime = new Date();
    const diff = newDataTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000 ) % 60;

    days.innerHTMl = d;
    hours.innerHTMl = h < 10 ? '0' + h : h;
    minutes.innerHTMl = m < 10 ? '0' + m : m;
    seconds.innerHTMl = s < 10 ? '0' + s : s;

    document.querySelector('.countTimer__day').textContent = d;
    document.querySelector('.countTimer__hour').textContent = h;
    document.querySelector('.countTimer__second').textContent = s;
    document.querySelector('.countTimer__minute').textContent = m;
}

setInterval(updateCounterDownTime, 1000);

// hamburger

 const menu = document.querySelector('.menuHamburger__wrapper')
 const menuItems = document.querySelectorAll('.menuItem')
 const hamburger = document.querySelector('.menuHamburger__menuIcon')
 const closeIcon = document.querySelector('.menuHamburger__closeIcon')
 const menuIcon = document.querySelector('.menuHamburger__menuIcon')


 const toggleMenu = () => {
     if (menu.classList.contains('showMenu')) {
         menu.classList.remove('showMenu');
         menuIcon.style.display = 'block'
         closeIcon.style.display = 'none'

     } else  {
         menu.classList.add('showMenu')
         // menuIcon.style.display = 'none'
         closeIcon.style.display = 'block'
     }
 }

 hamburger.addEventListener('click', toggleMenu)
 closeIcon.addEventListener('click', toggleMenu)



 menuItems.forEach(
     function (menuItem) {
         menuItem.addEventListener('click', toggleMenu)
     }
 )





 // section hurry up

const timer = document.querySelector('.countTimer')
const formContact = document.querySelector('.contactForm')
 const options = {
     root: null,
     threshold: 0,
 };


 const observer = new IntersectionObserver(function (entries, observer) {
     entries.forEach((entry) => {
         if (entry.isIntersecting) {
             timer.style.position = 'static'
             console.log('test2')
         } else {
             timer.style.position = 'sticky'
             console.log('test')
         }
     });
 }, options);

 observer.observe(formContact);