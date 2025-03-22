document.addEventListener("DOMContentLoaded", function () {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Dejar de observar una vez activado
            }
        });
    }, { threshold: 0.6 }); // Se activa cuando el 50% del elemento es visible

    let habilidadesContacto = document.querySelector(".habilidades-contacto");
    observer.observe(habilidadesContacto);
});