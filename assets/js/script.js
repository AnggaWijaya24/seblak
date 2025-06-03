// Pastikan DOM sudah siap
document.addEventListener('DOMContentLoaded', function () {

 // Efek scroll navbar
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar-custom');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


  // Rotating text
const rotatingText = document.getElementById("js-rotating");
if (rotatingText) {
  const phrases = ["Pedas", "Lezat", "Bikin Nagih", "Mantul", "Kekinian"];
  let currentPhraseIndex = 0;

  function rotateText() {
    rotatingText.textContent = phrases[currentPhraseIndex];
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
  }

  rotateText(); // Tampilkan pertama kali
  setInterval(rotateText, 2000);
}


  // Navbar toggler (untuk versi responsive)
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.collapse');
  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', () => {
      navbarCollapse.classList.toggle('show');
    });
  }

  // Filter galeri
  const filterButtons = document.querySelectorAll('.filter-btn');
  const filterItems = document.querySelectorAll('.filter-item');

  if (filterButtons.length && filterItems.length) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Aktifkan tombol
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Tampilkan/sembunyikan item
        filterItems.forEach(item => {
          if (filter === 'all' || item.classList.contains(filter)) {
            item.classList.remove('hide');
          } else {
            item.classList.add('hide');
          }
        });
      });
    });
  }

});

// Smooth scroll saat klik menu
document.querySelectorAll('.nav-link.page-scroll').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // Sesuaikan offset dengan tinggi navbar
        behavior: 'smooth'
      });
    }
  });
});

// ScrollSpy - aktifkan menu berdasarkan scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let scrollPos = window.pageYOffset || document.documentElement.scrollTop;

  sections.forEach(section => {
    const offsetTop = section.offsetTop - 80; // Sesuaikan offset
    const offsetBottom = offsetTop + section.offsetHeight;

    if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
      const id = section.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});