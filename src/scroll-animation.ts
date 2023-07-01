const observer: IntersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('scroll-animation');
    else entry.target.classList.remove('scroll-animation');
  });
}, { threshold: 0.5 });

const animationElems: NodeListOf<HTMLElement> = document.querySelectorAll('.animation')

animationElems.forEach(animationElem => observer.observe(animationElem));
