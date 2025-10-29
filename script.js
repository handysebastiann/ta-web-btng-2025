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
      
  const observerOneShoot = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };  
  const observerBar = new IntersectionObserver((entries, observer) => {
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
  }, observerOneShoot);    
  skillItems.forEach(item => {
    observerBar.observe(item);
  });

  const heroObserverCallback = (entries) => {
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-x-0');
        entry.target.classList.remove('opacity-0', '-translate-x-10', 'translate-x-10');
      } else {
        entry.target.classList.remove('opacity-100', 'translate-x-0');
        const direction = entry.target.dataset.animateDirection;
        
        if (direction === 'left') {
          entry.target.classList.add('opacity-0', '-translate-x-10');
        } else if (direction === 'right') {
          entry.target.classList.add('opacity-0', 'translate-x-10');
        } else {
          entry.target.classList.add('opacity-0');
        }
      }
    });
  };

  const observer2 = new IntersectionObserver(heroObserverCallback, observerOneShoot);
  const targets = document.querySelectorAll('.fade-in-element');
  
  targets.forEach(target => {
    observer2.observe(target);
  });

  const cardObserverCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-8');
        entry.target.classList.add('opacity-100', 'translate-y-0');
        observer.unobserve(entry.target);
      }
    });
  };

  const cardObserver = new IntersectionObserver(cardObserverCallback, observerOneShoot);
  const cardTargets = document.querySelectorAll('.project-card');
  
  cardTargets.forEach(target => {
    cardObserver.observe(target);
  });

  const scaleObserverCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'scale-90');
        entry.target.classList.add('opacity-100', 'scale-100');
        observer.unobserve(entry.target);
      }
    });
  };

  const scaleObserver = new IntersectionObserver(scaleObserverCallback, observerOneShoot);
  const scaleTargets = document.querySelectorAll('.animate-on-scroll');

  scaleTargets.forEach(target => {
    scaleObserver.observe(target);
  });

  const contactForm = document.getElementById('contact-form');
  const submitButton = document.getElementById('button-submit');

  if (contactForm && submitButton) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";

      setTimeout(() => {
        contactForm.reset();
        submitButton.textContent = "Message Sent!";

        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }

        setTimeout(() => {
          submitButton.disabled = false;
          submitButton.textContent = "Send Message";
        }, 1500);

      }, 1500);
    });
  }
});