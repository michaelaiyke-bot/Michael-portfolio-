// Hamburger menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Project tabs
const tabs = document.querySelectorAll('.project-tabs button');
const cards = document.querySelectorAll('.project-cards .card');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const type = tab.dataset.type;
    cards.forEach(card => {
      card.dataset.type === type ? card.classList.add('show') : card.classList.remove('show');
    });
  });
});

// Show first tab by default
if(tabs.length > 0) tabs[0].click();

// Animate cards on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, {threshold:0.2});

cards.forEach(card => observer.observe(card));
// Animate skills when scrolling into view
const skillsSection = document.getElementById('skills');
const skillBars = document.querySelectorAll('.progress div');

window.addEventListener('scroll', () => {
  const sectionTop = skillsSection.offsetTop;
  const sectionHeight = skillsSection.offsetHeight;
  const scrollPos = window.scrollY + window.innerHeight;

  if (scrollPos > sectionTop + 100) {
    skillBars.forEach(bar => {
      bar.style.width = bar.getAttribute('data-width');
    });
  }
});