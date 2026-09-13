document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation Observer for sections
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('scroll-hidden');
                entry.target.classList.add('scroll-bounce-in');
                observer.unobserve(entry.target);
                
                // Clean up the animation class after it finishes so hover states (like scaling on hover) work again
                entry.target.addEventListener('animationend', () => {
                    entry.target.classList.remove('scroll-bounce-in');
                }, { once: true });
            }
        });
    }, observerOptions);

    // Select all elements that need to animate on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => {
        el.classList.add('scroll-hidden');
        observer.observe(el);
    });
});
