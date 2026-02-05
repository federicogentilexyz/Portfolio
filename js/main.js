// ------------------------------
// IMMAGINI DI ANTEPRIMA (WORKS LIST)
// ------------------------------
const listItems = document.querySelectorAll('.works-list__items li');
const bg1 = document.getElementById('bgPreview1');
const bg2 = document.getElementById('bgPreview2');

// Esegui questa parte solo se gli elementi esistono (evita errori in altre pagine)
if (listItems.length > 0 && bg1 && bg2) {
    let current = bg1;
    let next = bg2;

    function showImage(item) {
        const image = item.dataset.image;
        if (!image) return;

        next.style.backgroundImage = `url(${image})`;
        next.classList.add('active');
        current.classList.remove('active');

        [current, next] = [next, current];
    }

    function hideImage() {
        current.classList.remove('active');
    }

    listItems.forEach(item => {
        item.addEventListener('mouseenter', () => showImage(item));
        item.addEventListener('mouseleave', hideImage);
    });
}

// ------------------------------
// MENU HAMBURGER (Sempre attivo)
// ------------------------------
const menuBtn = document.querySelector('.menu-btn');
const menuPanel = document.querySelector('.menu-panel');

if (menuBtn && menuPanel) {
    menuBtn.addEventListener('click', () => {
        menuPanel.classList.toggle('open');
        menuBtn.classList.toggle('open');
    });
}

// ------------------------------
// CAROUSEL (Migliorato)
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-slide");
    const nextBtn = document.querySelector(".carousel-btn.next");
    const prevBtn = document.querySelector(".carousel-btn.prev");

    // Se non ci sono slide o bottoni, esci senza dare errore
    if (slides.length === 0 || !nextBtn || !prevBtn) return;

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove("active");
            // Opzionale: ferma i video quando cambi slide (reset iframe)
            const iframe = slide.querySelector('iframe');
            if (iframe) {
                const src = iframe.src;
                iframe.src = src; 
            }
        });

        // Gestione indici
        if (index >= slides.length) currentIndex = 0;
        else if (index < 0) currentIndex = slides.length - 1;
        else currentIndex = index;

        slides[currentIndex].classList.add("active");
    }

    nextBtn.addEventListener("click", () => {
        showSlide(currentIndex + 1);
    });

    prevBtn.addEventListener("click", () => {
        showSlide(currentIndex - 1);
    });

    // Forza l'inizializzazione al caricamento
    showSlide(0);
});