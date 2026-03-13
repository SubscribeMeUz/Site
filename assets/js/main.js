/**
 * SubMe — Modern SaaS Landing Page
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. Navbar Scroll Effect
    // ==========================================
    const navbar = document.getElementById('navbar');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // ==========================================
    // 2. Mobile Navigation Toggle
    // ==========================================
    const mobileToggle = document.getElementById('mobileToggle');
    const mobilePanel = document.getElementById('mobilePanel');
    const mobileLinks = mobilePanel.querySelectorAll('a');

    const toggleMenu = () => {
        mobileToggle.classList.toggle('active');
        mobilePanel.classList.toggle('open');
        document.body.style.overflow = mobilePanel.classList.contains('open') ? 'hidden' : '';
    };

    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleMenu);
    }

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobilePanel.classList.contains('open')) {
                toggleMenu();
            }
        });
    });

    // ==========================================
    // 3. Scrollspy (Active Nav Link)
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const scrollActive = () => {
        const scrollY = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const link = document.querySelector(`.nav-links a[href*=${sectionId}]`);

            if (link) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    };
    
    window.addEventListener('scroll', scrollActive);

    // ==========================================
    // 4. Scroll to Top Button
    // ==========================================
    const scrollToTopBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ==========================================
    // 5. Scroll Reveal Animations (Intersection Observer)
    // ==========================================
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Trigger progress bars if this is the problems section
                if (entry.target.querySelector('.problem-bar-fill')) {
                    const bar = entry.target.querySelector('.problem-bar-fill');
                    bar.style.width = bar.getAttribute('data-width') + '%';
                }
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // ==========================================
    // 6. EmailJS Contact Form Integration
    // ==========================================
    
    // Initialize EmailJS (using the existing User ID from the original site)
    if (typeof emailjs !== 'undefined') {
        emailjs.init("PEFgZI-4c5H3aXOhe");
    }

    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name-field').value;
            const email = document.getElementById('email-field').value;
            const subject = document.getElementById('subject-field').value;
            const message = document.getElementById('message-field').value;
            
            const submitBtn = document.getElementById('submitBtn');
            const formMessage = document.getElementById('formMessage');

            // Set loading state
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;
            formMessage.className = 'form-message';
            formMessage.style.display = 'none';

            // Ensure emailjs is loaded before trying to send
            if (typeof emailjs === 'undefined') {
                showFormMessage('Email service not loaded. Please try again later.', 'error');
                resetBtn();
                return;
            }

            emailjs.send("service_en118vv", "template_blevpbo", {
                name: name,
                email: email,
                subject: subject,
                message: message,
            })
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                showFormMessage('Message sent successfully! We will get back to you soon.', 'success');
                contactForm.reset();
                resetBtn();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }, function(error) {
                console.log('FAILED...', error);
                showFormMessage('Failed to send message. Error: ' + (error.text || error.message || 'Unknown error'), 'error');
                resetBtn();
            });

            function showFormMessage(msg, type) {
                formMessage.innerText = msg;
                formMessage.className = 'form-message ' + type;
                formMessage.style.display = 'block';
            }

            function resetBtn() {
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }
});