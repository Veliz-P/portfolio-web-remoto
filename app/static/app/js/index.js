function setupScrollAnimations(options = {}) {
    const {
        selector = '.animate-on-scroll',
        threshold = 0.6,
        visibleClass = 'visible',
        animateOnce = true
    } = options;
    function animateElement(element) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(visibleClass);
                    if (animateOnce) {
                        observer.unobserve(entry.target);
                    }
                } else if (!animateOnce) {
                    entry.target.classList.remove(visibleClass);
                }
            });
        }, { threshold });
        observer.observe(element);
    }
    document.addEventListener("DOMContentLoaded", function () {
        const elements = document.querySelectorAll(selector);
        elements.forEach(animateElement);
    });
}
setupScrollAnimations({
    selector: '#habilidades',
    threshold: 0.15,
    animateOnce: false
});
setupScrollAnimations({
    selector: '#proyectos',
    threshold: 0.15,
    animateOnce: false
});
setupScrollAnimations({
    selector: '#about',
    threshold: 0.15,
    animateOnce: false
});
setupScrollAnimations({
    selector: '#contacto',
    threshold: 0.15,
    animateOnce: false
});