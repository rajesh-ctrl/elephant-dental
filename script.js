// Smooth scroll animation for navigation links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');

    for (const link of navLinks) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetSection = document.querySelector(this.getAttribute('href'));

            if (targetSection) {
                const targetOffset = targetSection.offsetTop;
                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// for hero section
document.addEventListener("DOMContentLoaded", function () {
    const heroContent = document.querySelector(".hero-content");
    heroContent.style.animationDelay = "0.5s";
});


// for carousel
let currentSlide = 0;
const slides = document.getElementsByClassName("carousel-slide");

function showSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[currentSlide].classList.add("active");
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide();
}

// Automatically move to the next slide every 5 seconds
setInterval(nextSlide, 5000);


// Create the map
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Create the map
    var map = L.map("map").setView([40.712776, -74.005974], 15);

    // Add the tile layer (map provider)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    // Add a marker for your dental clinic
    var marker = L.marker([40.712776, -74.005974]).addTo(map);

    // Add a popup to the marker
    marker.bindPopup("Your Dental Clinic").openPopup();
});


//  review
// JavaScript for Carousel Effect
// JavaScript for Carousel Effect
document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const cards = document.querySelectorAll('.review-carousel .card');
    const totalCards = cards.length;

    function showNextCard() {
        // Remove classes from all cards
        cards.forEach(card => {
            card.classList.remove('active', 'prev', 'next');
        });

        // Update the current index
        currentIndex = (currentIndex + 1) % totalCards;

        // Set the active, previous, and next classes
        cards[currentIndex].classList.add('active');
        cards[(currentIndex - 1 + totalCards) % totalCards].classList.add('prev');
        cards[(currentIndex + 1) % totalCards].classList.add('next');

        // Update the carousel position
        updateCarouselPosition();
    }

    function updateCarouselPosition() {
        const carouselContainer = document.querySelector('.review-carousel .carousel-container');
        const offset = -currentIndex * (300 + 20); // 300 is the width of the card + 20 for margin
        carouselContainer.style.transform = `translateX(${offset}px)`;
    }

    // Automatically show the next card every 3 seconds
    setInterval(showNextCard, 3000);
});



// form
// document.addEventListener('DOMContentLoaded', function () {
//     const scriptURL = 'https://script.google.com/macros/s/AKfycbx_a1uD1rFIcdBUcfc6C5bzxdpGvl7OtcF0AnLtFLi6_ZMIXU3dMKDBV-01FsO1VJIafw/exec'

//     const form = document.forms['contact-form']

//     form.addEventListener('submit', e => {
//         e.preventDefault()
//         fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//             .then(response => alert("Thank you! your form is submitted successfully."))
//             .then(() => { window.location.reload(); })
//             .catch(error => console.error('Error!', error.message))
//     })
// });
