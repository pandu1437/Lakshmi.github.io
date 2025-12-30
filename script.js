// Hamburger menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Typing animation
const roles = [
  "Final Year B.Tech IT Student",
  "Aspiring Software Developer",
  "Python & Web Developer"
];
let roleIndex=0, charIndex=0, isDeleting=false;
const typing = document.querySelector(".typing");

function typeEffect(){
    const text = roles[roleIndex];
    typing.textContent = isDeleting ? text.substring(0,--charIndex) : text.substring(0,++charIndex);

    if(!isDeleting && charIndex===text.length){ 
        isDeleting=true; 
        setTimeout(()=>{},1500);
    }
    if(isDeleting && charIndex===0){ 
        isDeleting=false; 
        roleIndex=(roleIndex+1)%roles.length;
    }

    setTimeout(typeEffect, isDeleting?60:100);
}
typeEffect();

// Scroll animations
function scrollAnimation(){
    document.querySelectorAll('.skill-card, .exp-card').forEach((el,i)=>{
        if(el.getBoundingClientRect().top < window.innerHeight-50){
            setTimeout(()=>el.classList.add('show'), i*150);
        }
    });
}

// Run on scroll and on load
window.addEventListener('scroll', scrollAnimation);
window.addEventListener('load', scrollAnimation);
