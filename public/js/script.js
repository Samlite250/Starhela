// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const headerBottom = document.getElementById('headerBottom');

    if (menuToggle && headerBottom) {
        menuToggle.addEventListener('click', function() {
            headerBottom.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (headerBottom && headerBottom.classList.contains('active')) {
            if (!event.target.closest('.site-header')) {
                headerBottom.classList.remove('active');
                if (menuToggle) menuToggle.classList.remove('active');
            }
        }
    });

    // Country dropdown toggle for mobile
    const countriesToggle = document.querySelector('.countries-toggle');
    const countrySubmenu = document.querySelector('.country-submenu');

    if (countriesToggle && window.innerWidth <= 768) {
        countriesToggle.addEventListener('click', function(e) {
            e.preventDefault();
            countrySubmenu.classList.toggle('active');
        });
    }

    // Smooth scroll for skip link
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                target.focus();
            }
        });
    }

    // Lazy loading for images (if not natively supported)
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.src;
        });
    } else {
        // Fallback for older browsers
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }

    // Activations Modal
    const activationsBtn = document.getElementById('activationsBtn');
    const activationsModal = document.getElementById('activationsModal');
    const modalClose = document.getElementById('modalClose');

    if (activationsBtn && activationsModal) {
        activationsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            activationsModal.classList.add('open');
            document.body.style.overflow = 'hidden';
        });

        modalClose.addEventListener('click', function() {
            activationsModal.classList.remove('open');
            document.body.style.overflow = '';
        });

        activationsModal.addEventListener('click', function(e) {
            if (e.target === activationsModal) {
                activationsModal.classList.remove('open');
                document.body.style.overflow = '';
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && activationsModal.classList.contains('open')) {
                activationsModal.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    }

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.post-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});
