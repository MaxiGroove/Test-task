(function() {
/* Up */
const backTop = document.querySelector('.up');

backTop.addEventListener('click', function() {
    // document.documentElement.scrollIntoView(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener('scroll', function() {
    backTop.hidden = !(scrollY > document.body.children[1].clientHeight);
});

/* Scroll */
const smoothLinks = document.querySelectorAll('a[href^="#"]');

for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function(event) {
        event.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        nav.classList.toggle('show');
        burger.classList.toggle('active');
    });
}

/* navToogle */
const burger = document.querySelector('#burger');
const nav = document.querySelector('#nav__list');

burger.addEventListener('click', function() {
    nav.classList.toggle('show');
    burger.classList.toggle('active');
});
}) ();




