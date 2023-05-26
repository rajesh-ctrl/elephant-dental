// Smooth scroll animation for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    for (const link of navLinks) {
        link.addEventListener('click', function(event) {
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
document.addEventListener("DOMContentLoaded", function() {
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
  

// cursor trail

document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');
    let mouseX = -100;
    let mouseY = -100;
  
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
  
    const moveCursor = () => {
      const delay = 200; // Set the delay (in milliseconds)
      const trailLength = 15; // Set the trail length (number of elements)
  
      for (let i = 0; i < trailLength; i++) {
        const trailElement = document.createElement('div');
        trailElement.classList.add('trail-dot');
        document.body.appendChild(trailElement);
  
        setTimeout(() => {
          trailElement.style.top = `${mouseY}px`;
          trailElement.style.left = `${mouseX}px`;
          trailElement.style.opacity = 0;
  
          setTimeout(() => {
            trailElement.remove();
          }, delay * trailLength);
        }, i * delay);
      }
    };
  
    setInterval(moveCursor, 50);
  
    document.addEventListener('mouseenter', () => {
      cursor.classList.add('active');
    });
  
    document.addEventListener('mouseleave', () => {
      cursor.classList.remove('active');
    });
  });
  