
document.addEventListener("DOMContentLoaded", () => {
    const enlaces = document.querySelectorAll('nav a[href^="#"]');
    const secciones = document.querySelectorAll("section[id]");

    
    enlaces.forEach((enlace) => {
        enlace.addEventListener("click", (evento) => {
            const destino = document.querySelector(enlace.getAttribute("href"));

            if (destino) {
                evento.preventDefault();
                destino.scrollIntoView({ behavior: "smooth" });
                history.replaceState(null, "", enlace.getAttribute("href"));
            }
        });
    });

    
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                enlaces.forEach((enlace) => {
                    enlace.classList.toggle(
                        "activo",
                        enlace.getAttribute("href") === `#${entrada.target.id}`
                    );
                });
            }
        });
    }, { rootMargin: "-20% 0px -65% 0px" });

    secciones.forEach((seccion) => observador.observe(seccion));
});