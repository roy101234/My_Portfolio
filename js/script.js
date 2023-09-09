document.addEventListener('DOMContentLoaded', function () {
    /*==================== toggle icon navbar ====================*/
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    /*==================== scroll sections active link ====================*/
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const id = section.getAttribute('id');

            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                currentSection = id;
                section.classList.add('show-animate');
            } else {
                section.classList.remove('show-animate');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSection) {
                link.classList.add('active');
            }
        });

        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        // ANIMATE FOOTER ON SCROLL
        let footer = document.querySelector('footer');
        footer.classList.toggle('show-animate', window.innerHeight + window.scrollY >= document.documentElement.scrollHeight);
    });
});
