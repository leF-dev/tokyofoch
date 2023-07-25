window.onload = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const infos = document.querySelector('.infos');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // L'élément doit être au moins à 50% visible pour déclencher l'observation
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            observer.unobserve(entry.target); // Arrêter l'observation une fois que l'élément est partiellement visible
            infos.classList.add('active');

            let valueDisplays = document.querySelectorAll(".num");
            let interval = 4000;
            valueDisplays.forEach((valueDisplay) => {
                let startValue = 0;
                let endValue = parseInt(valueDisplay.getAttribute("data-val"));
                let duration = Math.floor(interval / endValue);

                // Vérifier si c'est le nombre "1200" pour ajuster la durée de l'incrémentation
                if (endValue === 1200) {
                    duration = Math.floor(duration / 10); // Incrémentation plus rapide pour le nombre "1200"
                }

                let counter = setInterval(function () {
                    startValue += 1;
                    valueDisplay.textContent = "+ " + startValue;
                    if (startValue === endValue) {
                        clearInterval(counter);
                    }
                }, duration);
            });
        }
    });
}, options);

observer.observe(infos);


let img__slider = document.getElementsByClassName('img__slider');

let etape = 0;

let nbr__img = img__slider.length;

let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

function enleverActiveImages() {
    for (let i = 0; i < nbr__img; i++) {
        img__slider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function () {
    etape++;
    if (etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
})

precedent.addEventListener('click', function () {
    etape--;
    if (etape < 0) {
        etape = nbr__img - 1;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
})

setInterval(function () {
    etape++;
    if (etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
}, 3000)

document.getElementById('myForm').addEventListener('submit', function() {
    window.open('', '_self', '');
    window.close();
});

document.getElementById('myForm').addEventListener('submit', function() {
    alert('Le formulaire a été soumis avec succès.');
    });
