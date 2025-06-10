document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    body.appendChild(overlay);

    // Toggle menu function
    function toggleMenu() {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }

    // Event listeners
    mobileMenuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Close menu on window resize if open
    window.addEventListener('resize', () => {
        // Use matchMedia to align with CSS media queries for better responsiveness
        if (window.matchMedia('(min-width: 769px)').matches && navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
}); 