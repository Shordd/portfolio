const navLinks = document.querySelectorAll('nav ul li a');


navLinks.forEach(link => {

  link.addEventListener('click', event => {

    event.preventDefault();

    const targetId = link.getAttribute('href');

    const targetSection = document.querySelector(targetId);

    const offsetTop = targetSection.offsetTop;


    window.scrollTo({

      top: offsetTop,

      behavior: 'smooth'

    });

  });

});
