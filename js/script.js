// ===================================
// SMOOTH SCROLL & HEADER BEHAVIOR
// ===================================
const header = document.getElementById('header');
const nav = document.getElementById('nav');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelectorAll('.nav-link');

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Hide/show header logic
    // REQUEST: Hide when scrolling down, show ONLY when back at the top
    if (currentScroll <= 0) {
        // At the top - show header
        header.classList.remove('header-hidden');
    } else {
        // Scrolled down (any amount) - hide header
        header.classList.add('header-hidden');
    }

    lastScroll = currentScroll;
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// ===================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Don't prevent default for empty hash
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// PARTICLES ANIMATION (HERO SECTION)
// ===================================
const particles = document.getElementById('particles');
let particleCount = 0;

function createParticle() {
    if (particleCount > 30) return; // Limit particles for performance

    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 3 + 1 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = `rgba(0, ${Math.random() * 163 + 102}, 255, ${Math.random() * 0.5 + 0.3})`;
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.pointerEvents = 'none';
    particle.style.filter = 'blur(1px)';

    const duration = Math.random() * 10 + 10;
    particle.style.animation = `particleFloat ${duration}s ease-in-out infinite`;

    particles.appendChild(particle);
    particleCount++;

    // Remove particle after animation to prevent memory leak
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
            particleCount--;
        }
    }, duration * 1000);
}

// Create particles periodically
if (window.innerWidth > 768) { // Only on desktop for performance
    setInterval(createParticle, 2000);
    // Create initial particles
    for (let i = 0; i < 15; i++) {
        setTimeout(createParticle, i * 200);
    }
}

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInElements = document.querySelectorAll('.service-card, .differential-card, .stat-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initial state for fade-in elements
fadeInElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ===================================
// WHATSAPP FLOAT BUTTON BEHAVIOR
// ===================================
const whatsappFloat = document.getElementById('whatsappFloat');
let isWhatsappVisible = false;

window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;

    // Show WhatsApp button after scrolling 300px
    if (scrollPosition > 300 && !isWhatsappVisible) {
        whatsappFloat.style.opacity = '1';
        whatsappFloat.style.transform = 'scale(1)';
        isWhatsappVisible = true;
    } else if (scrollPosition <= 300 && isWhatsappVisible) {
        whatsappFloat.style.opacity = '0.8';
        whatsappFloat.style.transform = 'scale(0.9)';
        isWhatsappVisible = false;
    }
});

// Initial state for WhatsApp button
whatsappFloat.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
whatsappFloat.style.opacity = '0.8';
whatsappFloat.style.transform = 'scale(0.9)';

// ===================================
// CURSOR GLOW EFFECT ON BUTTONS
// ===================================
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const glow = button.querySelector('.btn-glow');
        if (glow) {
            glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.3) 0%, transparent 70%)`;
        }
    });
});

// ===================================
// PARALLAX EFFECT ON SCROLL
// ===================================
const heroBackground = document.querySelector('.hero-background');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;

    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// ===================================
// STATS COUNTER ANIMATION
// ===================================
const statsNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

function animateStats() {
    statsNumbers.forEach(stat => {
        const text = stat.textContent;
        // Skip animation if it's not a simple number
        if (text.includes('/') || text.includes('%')) return;

        const hasPlus = text.includes('+');
        const numericValue = parseInt(text.replace(/\D/g, ''));

        if (!isNaN(numericValue) && numericValue > 0) {
            let currentValue = 0;
            const increment = numericValue / 50;
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    stat.textContent = hasPlus ? `+${numericValue}` : numericValue;
                    clearInterval(timer);
                } else {
                    stat.textContent = hasPlus ? `+${Math.floor(currentValue)}` : Math.floor(currentValue);
                }
            }, 30);
        }
    });
}

// ===================================
// PREVENT LAYOUT SHIFT
// ===================================
window.addEventListener('load', () => {
    document.body.style.visibility = 'visible';
});

// Hide body initially to prevent flash
document.body.style.visibility = 'visible';

// ===================================
// PERFORMANCE: REDUCE ANIMATIONS ON LOW-END DEVICES
// ===================================
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable animations for users who prefer reduced motion
    document.querySelectorAll('*').forEach(element => {
        element.style.animation = 'none';
        element.style.transition = 'none';
    });
}

// ===================================
// CONSOLE BRANDING
// ===================================
console.log(
    '%c🚰 Desentupidora Sul RS ',
    'background: linear-gradient(135deg, #0066FF 0%, #00A3FF 100%); color: white; padding: 10px 20px; font-size: 16px; font-weight: bold; border-radius: 8px;'
);
console.log(
    '%cSoluções profissionais em desentupimento',
    'color: #0066FF; font-size: 12px; font-weight: 600;'
);
console.log(
    '%c📱 WhatsApp: (51) 99291-7122',
    'color: #25D366; font-size: 12px; font-weight: 600;'
);
