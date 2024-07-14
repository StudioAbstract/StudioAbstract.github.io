document.addEventListener('DOMContentLoaded', () => {
    const actividades = document.querySelectorAll('.actividad');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const popupClose = document.querySelectorAll('.popup .close');

    actividades.forEach(actividad => {
        actividad.addEventListener('click', () => {
            const titulo = actividad.querySelector('h3').textContent;
            const descripcion = actividad.dataset.descripcion;
            popupTitle.textContent = titulo;
            popupDescription.textContent = descripcion;
            popup.style.display = 'flex';
        });
    });

    popupClose.forEach(close => {
        close.addEventListener('click', () => {
            closePopup(popup);
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            closePopup(popup);
        }
    });

    const emailPopup = document.getElementById('email-popup');
    const emailClose = document.querySelector('#email-popup .close');

    emailClose.addEventListener('click', () => {
        closePopup(emailPopup);
    });

    window.addEventListener('click', (event) => {
        if (event.target === emailPopup) {
            closePopup(emailPopup);
        }
    });

    const aboutPopup = document.getElementById('about-popup');
    const aboutClose = document.querySelector('#about-popup .close');

    aboutClose.addEventListener('click', () => {
        closePopup(aboutPopup);
    });

    window.addEventListener('click', (event) => {
        if (event.target === aboutPopup) {
            closePopup(aboutPopup);
        }
    });
});

function openEmailPopup() {
    const emailPopup = document.getElementById('email-popup');
    emailPopup.style.display = 'flex';
}

function openAboutPopup() {
    const aboutPopup = document.getElementById('about-popup');
    aboutPopup.style.display = 'flex';
}

function closePopup(popup) {
    popup.style.display = 'none';
}
