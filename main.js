let menuIcon = document.querySelector('#menu-icons');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let nevLinks = document.querySelector('header ');

window.onscroll = () => {
    sections.foreach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            nevLinks.foreach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classlist.add('active')
            })
        }
    })
}

menuIcon.addEventListener('click', () => {
    console.log('triggered');
    
    menuIcon.classList.toggle('bx-x');  // Corrected 'classlist' to 'classList'
    navbar.classList.toggle('active');  // Corrected 'classlist' to 'classList'
});

