// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container')) {
            navLinks.style.display = 'none';
        }
    });
});

// Verse of the Day API Integration
async function fetchVerseOfTheDay() {
    try {
        const response = await fetch('https://api.scripture.api.bible/v1/verses/random', {
            headers: {
                'api-key': 'YOUR_API_KEY' // Replace with actual API key
            }
        });
        const data = await response.json();
        
        if (data && data.data) {
            document.getElementById('daily-verse').textContent = data.data.text;
            document.getElementById('daily-reflection').textContent = generateReflection(data.data.text);
        }
    } catch (error) {
        console.error('Error fetching verse of the day:', error);
        // Fallback verse if API fails
        document.getElementById('daily-verse').textContent = 
            '"For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future."';
        document.getElementById('daily-reflection').textContent = 
            'God\'s plans for us are always good, even when we can\'t see the bigger picture. Trust in His perfect timing and purpose for your life.';
    }
}

// Generate reflection based on verse (placeholder function)
function generateReflection(verse) {
    // This would typically be handled by a more sophisticated AI or database
    return 'Take a moment to reflect on this verse and how it applies to your life today.';
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.featured-card, .verse-content').forEach(el => {
    observer.observe(el);
});

// Form validation for prayer requests
function validatePrayerRequest(form) {
    const name = form.querySelector('#name').value;
    const request = form.querySelector('#request').value;
    
    if (!name || !request) {
        alert('Please fill in all required fields');
        return false;
    }
    
    return true;
}

// Initialize the verse of the day when the page loads
fetchVerseOfTheDay(); 