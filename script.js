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
        // 1. ELEMEN MASUK LAYAR:
        // Hapus kelas "hidden" dan tambahkan kelas "visible"
        entry.target.classList.add('opacity-100', 'translate-x-0');
        entry.target.classList.remove('opacity-0', '-translate-x-10', 'translate-x-10');
        
      } else {
        // 2. ELEMEN KELUAR LAYAR:
        // Hapus kelas "visible" untuk me-reset
        entry.target.classList.remove('opacity-100', 'translate-x-0');
        
        // Tambahkan kembali kelas "hidden" sesuai arahnya
        const direction = entry.target.dataset.animateDirection;
        
        if (direction === 'left') {
          entry.target.classList.add('opacity-0', '-translate-x-10');
        } else if (direction === 'right') {
          entry.target.classList.add('opacity-0', 'translate-x-10');
        } else {
          // Fallback jika tidak ada data-attribute
          entry.target.classList.add('opacity-0');
        }
      }
    });
  };

  // Buat observer baru
  const observer2 = new IntersectionObserver(heroObserverCallback, observerOneShoot);

  // Ambil semua elemen yang ingin dianimasikan
  const targets = document.querySelectorAll('.fade-in-element');
  
  // Mulai amati setiap elemen target
  targets.forEach(target => {
    observer2.observe(target);
  });

  const cardObserverCallback = (entries, observer) => {
    entries.forEach(entry => {
      // Jika kartu masuk ke viewport
      if (entry.isIntersecting) {
        // Hapus kelas 'hidden' (opacity-0, translate-y-8)
        entry.target.classList.remove('opacity-0', 'translate-y-8');
        
        // Tambah kelas 'visible' (opacity-100, translate-y-0)
        entry.target.classList.add('opacity-100', 'translate-y-0');
        
        // Berhenti mengamati kartu ini agar animasi tidak berulang
        observer.unobserve(entry.target);
      }
    });
  };

  // Buat observer baru untuk kartu
  const cardObserver = new IntersectionObserver(cardObserverCallback, observerOneShoot);

  // Ambil semua elemen kartu proyek
  const cardTargets = document.querySelectorAll('.project-card');
  
  // Mulai amati setiap kartu
  cardTargets.forEach(target => {
    cardObserver.observe(target);
  });

  const scaleObserverCallback = (entries, observer) => {
    entries.forEach(entry => {
      // Jika elemen masuk ke viewport
      if (entry.isIntersecting) {
        
        // MODIFIKASI UTAMA DI SINI:
        entry.target.classList.remove('opacity-0', 'scale-90');
        entry.target.classList.add('opacity-100', 'scale-100'); // Tambahkan scale-100
        
        // Berhenti mengamati elemen ini
        observer.unobserve(entry.target);
      }
    });
  };

  // Buat observer baru
  const scaleObserver = new IntersectionObserver(scaleObserverCallback, observerOneShoot);

  // Ambil semua elemen yang ingin dianimasikan
  const scaleTargets = document.querySelectorAll('.animate-on-scroll');
  
  // Mulai amati setiap target
  scaleTargets.forEach(target => {
    scaleObserver.observe(target);
  });

});