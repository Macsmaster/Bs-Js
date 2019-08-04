import { formatWithOptions } from "util";

window.sr = ScrollReveal();
sr.reveal('.navegacion', {
duration: 2500,
origin: '.navegacion'

});

window.sr = ScrollReveal();
sr.reveal('.container', {
duration: 2000,
origin: 'left',
distance: '300px'

});

window.sr = ScrollReveal();
sr.reveal('.footer', {
duration: 2000,
origin: 'top',
distance: '300px'

});

/* Stackoverflow*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
