const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  reveals.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < windowHeight - 100) {
      card.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


  const services = document.querySelector('.services');

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        services.classList.add('active-bg');
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(services);


  