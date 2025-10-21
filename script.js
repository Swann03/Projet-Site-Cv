window.addEventListener('scroll', () => {
    const header = document.querySelector('section');
    section.forEach(section => {
        const rect = section.getBoundingClientRect();
        if(rect.top < window.innerHeight -100) {
            section.classList.add('visible');
        }
    })
});