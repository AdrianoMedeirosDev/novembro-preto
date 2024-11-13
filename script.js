// Função para exibir as seções quando estão no viewport
function revealSections() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            reveal.classList.add('revealed');
        } else {
            reveal.classList.remove('revealed');
        }
    });
}

window.addEventListener('scroll', revealSections);
