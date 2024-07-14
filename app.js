const opacityTransitionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-full');
    }
  });
});

const opacityTransitionElements = document.querySelectorAll('.opacity-transition');
opacityTransitionElements.forEach((el) => opacityTransitionObserver.observe(el));


const fromBottomTransitionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('finish-bottom-top-transition');
    } else {
      // entry.target.classList.remove('finish-left-transition');
    }
  });
});

const fromBottomTransitionElements = document.querySelectorAll('.from-bottom-transition');
fromBottomTransitionElements.forEach((el) => fromBottomTransitionObserver.observe(el));



const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;