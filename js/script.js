document.querySelector('.hamburger-menu').addEventListener('click', () => {
    const nav = document.querySelector('.navbar-right ul');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});
