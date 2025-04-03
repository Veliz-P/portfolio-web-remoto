function setupScrollAnimations(options = {}) {
    const {
        selector = '.animate-on-scroll',
        threshold = 0.6,
        visibleClass = 'visible',
        animateOnce = true
    } = options;
    // Función para animar elementos individuales
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
    // Configurar animaciones cuando el DOM esté listo
    document.addEventListener("DOMContentLoaded", function () {
        const elements = document.querySelectorAll(selector);
        elements.forEach(animateElement);
    });
}
// Uso básico (puedes configurar esto según tus necesidades)
setupScrollAnimations({
    selector: '.habilidades-contacto',
    threshold: 0.4
});
setupScrollAnimations({
    selector: '.seccion-proyectos',
    threshold: 0.4
});
setupScrollAnimations({
    selector: '.seccion-about',
    threshold: 0.3
});