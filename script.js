const hamburgerBtn = document.querySelector('[data-collapse-toggle="navbar-default"]');
const menuContent = document.getElementById('navbar-default');

hamburgerBtn.addEventListener('click', () => {    
    if (menuContent.style.maxHeight) {
        menuContent.style.maxHeight = null;
        hamburgerBtn.setAttribute('aria-expanded', 'false');
    } else {
        menuContent.style.maxHeight = menuContent.scrollHeight + "px";
        hamburgerBtn.setAttribute('aria-expanded', 'true');
    }
    
});