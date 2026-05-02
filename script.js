// ===========================
// EMAILJS INITIALIZATION
// ===========================

// Initialize EmailJS with your public key
emailjs.init("nmxZP2IdTOkScF3jZ");

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
    // CONTACT FORM WITH EMAILJS
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

            // Validate all fields
            if (!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value) {
                button.textContent = '✗ Please fill all fields';
                button.style.background = '#ef4444';
                setTimeout(() => {
                    button.textContent = 'Send Message';
                    button.style.background = '';
                }, 2000);
                return;
            }

            // Show loading state
            button.textContent = 'Sending...';
            button.disabled = true;

            // Prepare data for EmailJS
            const templateParams = {
                from_name: nameInput.value,
                reply_to: emailInput.value,
                subject: subjectInput.value,
                message: messageInput.value,
                time: new Date().toLocaleString()
            };

            // Send email using EmailJS
            // All credentials are now configured:
            // Public Key: nmxZP2IdTOkScF3jZ
            // Service ID: service_4d2vjjj
            // Template ID: template_eix2b2n
            emailjs.send('service_4d2vjjj', 'template_eix2b2n', templateParams)
                .then(function(response) {
                    console.log('✓ SUCCESS! Email sent!', response.status, response.text);
                    button.textContent = '✓ Message Sent!';
                    button.style.background = '#06b6d4';

                    // Reset form
                    contactForm.reset();

                    // Restore button after 3 seconds
                    setTimeout(() => {
                        button.textContent = 'Send Message';
                        button.style.background = '';
                        button.disabled = false;
                    }, 3000);
                }, function(error) {
                    console.log('✗ FAILED to send email...', error);
                    button.textContent = '✗ Failed to send';
                    button.style.background = '#ef4444';

                    console.error('EmailJS Error Details:', error);

                    setTimeout(() => {
                        button.textContent = 'Send Message';
                        button.style.background = '';
                        button.disabled = false;
                    }, 3000);
                });
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

    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'pulse 0.6s ease-out';
                skillObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => skillObserver.observe(bar));

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

console.log('%c Welcome to Arun Avasthi\'s Portfolio! ', 'background: linear-gradient(135deg, #667eea 0%, #f093fb 100%); color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;');
console.log('%c ✓ EmailJS Integration Active ', 'color: #06b6d4; font-size: 14px; font-weight: bold;');
console.log('%c Contact form will send emails to your Gmail inbox ', 'color: #667eea; font-size: 12px;');