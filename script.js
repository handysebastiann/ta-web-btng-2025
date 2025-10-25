// 1. Pilih elemen tombol dan elemen konten
const hamburgerBtn = document.querySelector('[data-collapse-toggle="navbar-default"]');
const menuContent = document.getElementById('navbar-default');
// 2. Tambahkan event listener 'click' pada tombol
hamburgerBtn.addEventListener('click', () => {
    
    // Cek apakah menu sedang terbuka (punya style.maxHeight)
    if (menuContent.style.maxHeight) {
        // Jika terbuka: Tutup menu
        menuContent.style.maxHeight = null;
        hamburgerBtn.setAttribute('aria-expanded', 'false');
    } else {
        // Jika tertutup: Buka menu
        // Gunakan scrollHeight untuk mendapatkan tinggi asli konten
        menuContent.style.maxHeight = menuContent.scrollHeight + "px";
        hamburgerBtn.setAttribute('aria-expanded', 'true');
    }
    
});