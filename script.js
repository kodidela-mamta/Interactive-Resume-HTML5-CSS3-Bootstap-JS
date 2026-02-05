// Interactive Resume JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.progress-bar');
    const animateSkills = () => {
        skillBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (barTop < windowHeight - 50) {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            }
        });
    };

    window.addEventListener('scroll', animateSkills);
    animateSkills(); // Initial check

    // Project modal functionality
    const projectButtons = document.querySelectorAll('.btn-view-project');
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('projectModalLabel');
    const modalBody = document.getElementById('projectModalBody');

    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectTitle = this.getAttribute('data-title');
            const projectDescription = this.getAttribute('data-description');
            modalTitle.textContent = projectTitle;
            modalBody.textContent = projectDescription;
        });
    });

    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});