let hamburger = document.querySelector('.hamburger');
let navbarHeight = document.querySelector('.navbar');
let navbarVisibility = document.querySelector('.nav-list');
let rightNav = document.querySelector('.rightNav')



hamburger.addEventListener('click' ,()=>{
    navbarHeight.classList.toggle('h-navResp');
    navbarVisibility.classList.toggle('v-classResp');
    rightNav.classList.toggle('v-classResp');

});