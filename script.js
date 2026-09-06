// ===========================
// SMOOTH SCROLL & NAVIGATION
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when link is clicked
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===========================
    // CONTACT FORM
    // ===========================

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form inputs
            const nameInput = this.querySelector('input[type="text"]');
            const emailInput = this.querySelector('input[type="email"]');
            const subjectInputs = this.querySelectorAll('input[type="text"]');
            const subjectInput = subjectInputs.length > 1 ? subjectInputs[1] : subjectInputs[0];
            const messageInput = this.querySelector('textarea');
            const button = this.querySelector('button');

            if (!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value) {
                button.textContent = '✗ Please fill all fields';
                button.style.background = '#ef4444';
                setTimeout(() => {
                    button.textContent = 'Email Me';
                    button.style.background = '';
                }, 2000);
                return;
            }

            const recipient = 'amitankitgupta1@gmail.com';
            const subject = encodeURIComponent(subjectInput.value);
            const body = encodeURIComponent(`Hello Ankit,\n\n${messageInput.value}\n\nRegards,\n${nameInput.value}\n${emailInput.value}`);
            window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
        });
    }

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInLeft 0.8s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Project cards animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        observer.observe(card);
    });

    // Stat boxes animation
    const statBoxes = document.querySelectorAll('.stat-box');
    statBoxes.forEach(box => {
        observer.observe(box);
    });
});

// ===========================
// NAVBAR ACTIVE STATE
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

// ===========================
// SMOOTH SCROLL FOR LINKS
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// CONSOLE MESSAGES
// ===========================

console.log('%c Welcome to Ankit Gupta\'s Portfolio! ', 'background: linear-gradient(135deg, #667eea 0%, #f093fb 100%); color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;');
