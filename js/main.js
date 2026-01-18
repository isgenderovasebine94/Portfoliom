// Scroll section animation and skill bar animation
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
      if(entry.target.id === 'skills'){
        const bars = entry.target.querySelectorAll('.progress-bar');
        bars.forEach(bar => {
          bar.style.width = bar.getAttribute('data-width');
        });
      }
    }
  });
}, { threshold: 0.1 });
sections.forEach(section => observer.observe(section));