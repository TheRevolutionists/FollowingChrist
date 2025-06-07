// Prayer Request Form Validation
function validatePrayerForm(form) {
    const request = form.querySelector('#request').value.trim();
    if (!request) {
        alert('Please enter your prayer request.');
        return false;
    }
    
    // In a real application, this would send the data to a server
    alert('Thank you for sharing your prayer request. We will pray for you.');
    form.reset();
    return false; // Prevent form submission for now
}

// Prayer Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const prayButtons = document.querySelectorAll('.pray-btn');
    
    prayButtons.forEach(button => {
        button.addEventListener('click', function() {
            const prayerCount = this.nextElementSibling;
            const currentCount = parseInt(prayerCount.textContent);
            prayerCount.textContent = `${currentCount + 1} people praying`;
            
            // Disable button after clicking
            this.disabled = true;
            this.style.backgroundColor = '#95a5a6';
            this.innerHTML = '<i class="fas fa-check"></i> Praying';
        });
    });
});

// Event Card Interactions
document.addEventListener('DOMContentLoaded', function() {
    const eventLinks = document.querySelectorAll('.event-link');
    
    eventLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const eventTitle = this.closest('.event-details').querySelector('h3').textContent;
            alert(`More details about "${eventTitle}" will be available soon.`);
        });
    });
});

// Volunteer Sign-up Functionality
document.addEventListener('DOMContentLoaded', function() {
    const volunteerButtons = document.querySelectorAll('.volunteer-btn');
    
    volunteerButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const opportunity = this.closest('.volunteer-card').querySelector('h3').textContent;
            
            // In a real application, this would open a sign-up form or modal
            alert(`Thank you for your interest in "${opportunity}". Our team will contact you soon with more information.`);
        });
    });
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
});

// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
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
}); 