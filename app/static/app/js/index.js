document.addEventListener("DOMContentLoaded", function () {
    // Función reutilizable para animar elementos al entrar en vista
    function animateOnScroll(element, threshold = 0.6) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // Deja de observar una vez activado
                }
            });
        }, { threshold: threshold }); // Se activa cuando un porcentaje del elemento es visible
        observer.observe(element);
    }
    // Aplicar la función a elementos específicos
    const habilidadesContacto = document.querySelector(".habilidades-contacto");
    animateOnScroll(habilidadesContacto);
});
