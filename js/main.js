// 弘栎集团官网 - JS
document.addEventListener('DOMContentLoaded', function() {
  // Mobile nav toggle
  const mobileBtn = document.querySelector('.mobile-btn');
  const nav = document.querySelector('nav');
  if (mobileBtn) {
    mobileBtn.addEventListener('click', function() {
      nav.classList.toggle('open');
    });
  }

  // Header scroll effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Close nav on link click (mobile)
  document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function() {
      nav.classList.remove('open');
    });
  });
});
