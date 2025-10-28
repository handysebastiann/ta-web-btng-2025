document.addEventListener("DOMContentLoaded", () => {
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

    const skillItems = document.querySelectorAll(".skill-item");
        
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target.querySelector(".progress-bar");
          const percentage = bar.dataset.percentage;
        
          setTimeout(() => {
            bar.style.width = percentage + "%";
          }, 100);  
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);    
    skillItems.forEach(item => {
      observer.observe(item);
    });
});