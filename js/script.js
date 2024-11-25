// Toggle Class Active

const navbarNav = document.querySelector('.navbar-nav');

// ketika hambruger menu di klik
document.querySelector('#hamburger-menu').onclick = (event) => {

    event.preventDefault();
    navbarNav.classList.toggle('active');
};

// klik diluar sidebar

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})
