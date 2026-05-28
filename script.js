// ═══════ Menú hamburguesa ═══════
function toggleMenu() {
    var navLinks = document.getElementById('navLinks');
    var menuIcon = document.getElementById('menuIcon');
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        menuIcon.innerHTML = '&#10005;';
    } else {
        menuIcon.innerHTML = '&#9776;';
    }
}

// Cerrar menú al hacer clic en un enlace
var links = document.querySelectorAll('.nav-links a');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        var navLinks = document.getElementById('navLinks');
        navLinks.classList.remove('active');
        document.getElementById('menuIcon').innerHTML = '&#9776;';
    });
}

// ═══════ Botón volver arriba ═══════
window.addEventListener('scroll', function() {
    var btn = document.getElementById('scrollTopBtn');
    if (window.scrollY > 400) {
        btn.classList.add('visible');
    } else {
        btn.classList.remove('visible');
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ═══════ FAQ Acordeón ═══════
var faqQuestions = document.querySelectorAll('.faq-question');
for (var i = 0; i < faqQuestions.length; i++) {
    faqQuestions[i].addEventListener('click', function() {
        var item = this.parentElement;
        // Cerrar otros
        var allItems = document.querySelectorAll('.faq-item');
        for (var j = 0; j < allItems.length; j++) {
            if (allItems[j] !== item) {
                allItems[j].classList.remove('open');
            }
        }
        // Toggle actual
        item.classList.toggle('open');
    });
}

// ═══════ Animación de barras de habilidades ═══════
function animateSkills() {
    var fills = document.querySelectorAll('.skill-fill');
    for (var i = 0; i < fills.length; i++) {
        var width = fills[i].style.width;
        fills[i].style.width = '0%';
        setTimeout(function(fill, w) {
            fill.style.width = w;
        }, 200 + i * 100, fills[i], width);
    }
}

// Ejecutar animación cuando la sección sea visible
var skillsSection = document.querySelector('.skills-section');
if (skillsSection) {
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    observer.observe(skillsSection);
}

// ═══════ Formulario de contacto ═══════
var contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('¡Mensaje enviado! Gracias por contactarme. Te responderé lo antes posible.');
        contactForm.reset();
    });
}
